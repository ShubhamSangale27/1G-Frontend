import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime, switchMap, of, catchError } from 'rxjs';
import { IndianPricePipe } from '../pipes/indian-price.pipe';
import { getCitiesForState, getStateNames } from '../../core/data/indian-locations';
import {
  MarketAreaDto,
  MarketProjectionPoint,
  MarketProjectionResponse,
  MarketRange,
  MarketStatsService,
} from '../../core/services/market-stats.service';

export const DEFAULT_INVESTMENT = 25_00_000;
export const DEFAULT_MONTHLY = 25_000;
export const DEFAULT_YEARS = 10;
export const MIN_INVESTMENT = 1_00_000;
export const MAX_INVESTMENT = 5_00_00_000;
export const MIN_MONTHLY = 0;
export const MAX_MONTHLY = 5_00_000;
export const MIN_YEARS = 1;
export const MAX_YEARS = 20;
export const MIN_RATE = 3;
export const MAX_RATE = 18;
export const FALLBACK_CAGR = 8.5;

@Component({
  selector: 'app-property-growth-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, IndianPricePipe],
  template: `
    <section class="growth-calc" aria-labelledby="growth-calc-title">
      <div class="container">
        <header class="growth-calc-header">
          <h2 id="growth-calc-title" class="growth-calc-title">Property growth projector</h2>
          <p class="growth-calc-sub">
            Select an Indian area, review historical market performance, and compare it with your
            investment projection.
          </p>
        </header>

        <div class="growth-calc-layout">
          <div class="growth-calc-controls">
            <div class="area-row">
              <div class="control-group">
                <label for="calc-state">State</label>
                <select id="calc-state" class="select" [(ngModel)]="selectedState" (ngModelChange)="onStateChange()">
                  <option value="">Select state</option>
                  <option *ngFor="let s of states" [value]="s">{{ s }}</option>
                </select>
              </div>
              <div class="control-group">
                <label for="calc-city">City</label>
                <select id="calc-city" class="select" [(ngModel)]="selectedCity" (ngModelChange)="onCityChange()" [disabled]="!selectedState">
                  <option value="">Select city</option>
                  <option *ngFor="let c of cities" [value]="c">{{ c }}</option>
                </select>
              </div>
              <div class="control-group">
                <label for="calc-loc">Location</label>
                <select id="calc-loc" class="select" [(ngModel)]="selectedLocationId" (ngModelChange)="onLocationChange()" [disabled]="!selectedCity || !localities.length">
                  <option [ngValue]="null">{{ localities.length ? 'Select location' : (selectedCity ? 'No locations yet' : 'Select city first') }}</option>
                  <option *ngFor="let loc of localities" [ngValue]="loc.id">{{ loc.name }}</option>
                </select>
              </div>
            </div>

            <div class="range-tabs" role="tablist" aria-label="Historical range">
              <button
                type="button"
                class="range-tab"
                *ngFor="let r of ranges"
                [class.active]="selectedRange === r"
                (click)="setRange(r)"
              >{{ r }}</button>
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="inv-amount">Initial investment</label>
                <div class="control-input-wrap">
                  <span class="prefix">₹</span>
                  <input id="inv-amount" type="number" [ngModel]="investmentAmount" (ngModelChange)="setInvestment($event)"
                    [min]="minInvestment" [max]="maxInvestment" step="50000" />
                </div>
              </div>
              <input type="range" class="slider" [ngModel]="investmentAmount" (ngModelChange)="setInvestment($event)"
                [min]="minInvestment" [max]="maxInvestment" step="50000" aria-label="Initial investment slider" />
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="monthly-amt">Monthly add-on</label>
                <div class="control-input-wrap">
                  <span class="prefix">₹</span>
                  <input id="monthly-amt" type="number" [ngModel]="monthlyContribution" (ngModelChange)="setMonthly($event)"
                    [min]="minMonthly" [max]="maxMonthly" step="1000" />
                </div>
              </div>
              <input type="range" class="slider" [ngModel]="monthlyContribution" (ngModelChange)="setMonthly($event)"
                [min]="minMonthly" [max]="maxMonthly" step="1000" aria-label="Monthly contribution slider" />
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="tenure-yrs">Horizon (years)</label>
                <div class="control-input-wrap">
                  <input id="tenure-yrs" type="number" [ngModel]="years" (ngModelChange)="setYears($event)"
                    [min]="minYears" [max]="maxYears" step="1" />
                  <span class="suffix">yr</span>
                </div>
              </div>
              <input type="range" class="slider" [ngModel]="years" (ngModelChange)="setYears($event)"
                [min]="minYears" [max]="maxYears" step="1" aria-label="Investment horizon slider" />
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="user-rate">Your expected appreciation</label>
                <div class="control-input-wrap">
                  <input id="user-rate" type="number" [ngModel]="expectedRatePct" (ngModelChange)="setRate($event)"
                    [min]="minRate" [max]="maxRate" step="0.1" />
                  <span class="suffix">%</span>
                </div>
              </div>
              <input type="range" class="slider" [ngModel]="expectedRatePct" (ngModelChange)="setRate($event)"
                [min]="minRate" [max]="maxRate" step="0.1" aria-label="Expected appreciation rate slider" />
            </div>

            <div class="summary-grid">
              <div class="summary-item">
                <span class="summary-label">Area CAGR ({{ selectedRange }})</span>
                <strong class="summary-value">{{ regionalRatePct | number:'1.1-2' }}% p.a.</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Avg price / sqft</span>
                <strong class="summary-value">{{ latestAvgPricePerSqft != null ? (latestAvgPricePerSqft | indianPrice) : '—' }}</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Range return</span>
                <strong class="summary-value">{{ rangeReturnPct != null ? (rangeReturnPct | number:'1.1-2') + '%' : '—' }}</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Rental yield</span>
                <strong class="summary-value">{{ latestRentalYieldPct != null ? (latestRentalYieldPct | number:'1.1-2') + '%' : '—' }}</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Area projection</span>
                <strong class="summary-value regional">{{ regionalFinal | indianPrice }}</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Your portfolio</span>
                <strong class="summary-value user">{{ userFinal | indianPrice }}</strong>
              </div>
            </div>

            <p class="assumption-note" *ngIf="!dataMessage">
              Historical line uses admin/open market snapshots for the selected area.
              Forecast continues at the derived CAGR ({{ regionalRatePct | number:'1.1-2' }}% p.a.).
              Figures are indicative only — not investment advice.
            </p>
            <p class="assumption-note warn" *ngIf="dataMessage">{{ dataMessage }}</p>
          </div>

          <div class="growth-calc-chart" role="img" [attr.aria-label]="chartAriaLabel">
            <div class="loading-overlay" *ngIf="loading">Loading market data…</div>
            <svg class="chart-svg" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <g *ngFor="let gy of yGrid" class="grid-line">
                <line [attr.x1]="pad.l" [attr.x2]="innerW + pad.l" [attr.y1]="gy.y" [attr.y2]="gy.y" />
                <text [attr.x]="pad.l - 8" [attr.y]="gy.y + 4" text-anchor="end">{{ gy.label }}</text>
              </g>
              <g *ngFor="let gx of xLabels" class="x-label">
                <text [attr.x]="gx.x" [attr.y]="pad.t + innerH + 22" text-anchor="middle">Y{{ gx.year }}</text>
              </g>
              <line *ngIf="forecastSplitX != null" class="forecast-split"
                [attr.x1]="forecastSplitX" [attr.x2]="forecastSplitX"
                [attr.y1]="pad.t" [attr.y2]="pad.t + innerH" />
              <polyline class="line-regional" fill="none" [attr.points]="regionalPolyline" />
              <polyline class="line-user" fill="none" [attr.points]="userPolyline" />
              <circle *ngFor="let p of chartDots" class="dot-regional" [attr.cx]="p.rx" [attr.cy]="p.ry" r="3.5" />
              <circle *ngFor="let p of chartDots" class="dot-user" [attr.cx]="p.ux" [attr.cy]="p.uy" r="3.5" />
            </svg>
            <div class="chart-legend">
              <span class="legend-item regional"><i></i> Area market @ {{ regionalRatePct | number:'1.1-2' }}%</span>
              <span class="legend-item user"><i></i> Your investment @ {{ expectedRatePct }}%</span>
              <span class="legend-item split" *ngIf="forecastSplitX != null"><i></i> Forecast →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .growth-calc {
      padding: 3.5rem 0 4rem;
      background:
        radial-gradient(ellipse 80% 60% at 10% 0%, rgba(14, 165, 233, 0.08), transparent 55%),
        radial-gradient(ellipse 70% 50% at 90% 100%, rgba(2, 132, 199, 0.06), transparent 50%),
        linear-gradient(180deg, var(--bg) 0%, var(--surface) 40%, var(--bg) 100%);
      border-block: 1px solid var(--border-light);
    }
    .growth-calc-header { text-align: center; max-width: 42rem; margin: 0 auto 2.25rem; }
    .growth-calc-title {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.8vw, 2.125rem);
      font-weight: 800; margin: 0 0 0.5rem; color: var(--text); letter-spacing: -0.02em;
    }
    .growth-calc-sub { margin: 0; color: var(--text-muted); font-size: clamp(0.9375rem, 1.5vw, 1.0625rem); line-height: 1.55; }
    .growth-calc-layout {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
      gap: 2rem; align-items: start; max-width: 1120px; margin: 0 auto;
    }
    .growth-calc-controls { display: flex; flex-direction: column; gap: 1.15rem; }
    .area-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; }
    .control-group { display: flex; flex-direction: column; gap: 0.4rem; }
    .control-group > label, .control-label-row label { font-weight: 600; font-size: 0.875rem; color: var(--text); }
    .select {
      width: 100%; padding: 0.55rem 0.65rem; border: 1px solid var(--border); border-radius: var(--radius-sm);
      background: var(--surface); color: var(--text); font-family: var(--font-sans); font-size: 0.875rem;
    }
    .select:disabled { opacity: 0.6; }
    .range-tabs { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .range-tab {
      border: 1px solid var(--border); background: var(--surface); color: var(--text-secondary);
      border-radius: var(--radius-sm); padding: 0.35rem 0.7rem; font-size: 0.75rem; font-weight: 700;
      cursor: pointer; font-family: var(--font-sans);
    }
    .range-tab.active { background: var(--primary); border-color: var(--primary); color: #fff; }
    .control-label-row { display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; flex-wrap: wrap; }
    .control-input-wrap {
      display: inline-flex; align-items: center; gap: 0.25rem; background: var(--surface);
      border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 0.2rem 0.5rem; min-width: 7.5rem;
    }
    .control-input-wrap .prefix, .control-input-wrap .suffix { color: var(--text-muted); font-size: 0.8125rem; font-weight: 600; }
    .control-input-wrap input {
      border: 0; background: transparent; width: 5.5rem; font-family: var(--font-sans);
      font-size: 0.9375rem; font-weight: 700; color: var(--text); padding: 0.25rem 0; outline: none;
      -moz-appearance: textfield;
    }
    .control-input-wrap input::-webkit-outer-spin-button,
    .control-input-wrap input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
    .slider {
      -webkit-appearance: none; appearance: none; width: 100%; height: 6px; border-radius: 999px;
      background: var(--bg-tertiary); outline: none; cursor: pointer;
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%;
      background: var(--primary); border: 2px solid var(--surface); box-shadow: var(--shadow-sm); cursor: pointer;
    }
    .slider::-moz-range-thumb {
      width: 18px; height: 18px; border-radius: 50%; background: var(--primary);
      border: 2px solid var(--surface); box-shadow: var(--shadow-sm); cursor: pointer;
    }
    .summary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.65rem; }
    .summary-item { padding: 0.75rem 0.9rem; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); }
    .summary-label { display: block; font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.3rem; line-height: 1.3; }
    .summary-value { font-family: var(--font-display); font-size: 1rem; font-weight: 700; }
    .summary-value.regional { color: var(--text-secondary); }
    .summary-value.user { color: var(--primary-dark); }
    .assumption-note { margin: 0; font-size: 0.75rem; color: var(--text-light); line-height: 1.45; }
    .assumption-note.warn { color: #b45309; }
    .growth-calc-chart {
      position: relative; background: var(--surface); border: 1px solid var(--border);
      border-radius: var(--radius-lg); padding: 1.25rem 1rem 1rem; box-shadow: var(--shadow); min-height: 380px;
    }
    .loading-overlay {
      position: absolute; inset: 0; display: grid; place-items: center; background: rgba(255,255,255,0.65);
      z-index: 2; font-size: 0.875rem; color: var(--text-muted); font-weight: 600;
    }
    .chart-svg { width: 100%; height: auto; display: block; }
    .grid-line line { stroke: var(--border); stroke-width: 1; }
    .grid-line text, .x-label text { fill: var(--text-muted); font-size: 11px; font-family: var(--font-sans); }
    .forecast-split { stroke: var(--border); stroke-width: 1.5; stroke-dasharray: 4 4; }
    .line-regional { stroke: var(--text-secondary); stroke-width: 2.25; stroke-dasharray: 6 4; stroke-linecap: round; stroke-linejoin: round; }
    .line-user { stroke: var(--primary); stroke-width: 2.75; stroke-linecap: round; stroke-linejoin: round; }
    .dot-regional { fill: var(--text-secondary); }
    .dot-user { fill: var(--primary); }
    .chart-legend {
      display: flex; flex-wrap: wrap; gap: 1rem 1.5rem; justify-content: center; margin-top: 0.75rem;
      font-size: 0.8125rem; color: var(--text-secondary); font-weight: 600;
    }
    .legend-item { display: inline-flex; align-items: center; gap: 0.4rem; }
    .legend-item i { display: inline-block; width: 18px; height: 3px; border-radius: 2px; }
    .legend-item.regional i {
      background: repeating-linear-gradient(90deg, var(--text-secondary) 0 6px, transparent 6px 10px); height: 3px;
    }
    .legend-item.user i { background: var(--primary); }
    .legend-item.split i {
      background: repeating-linear-gradient(90deg, var(--border) 0 3px, transparent 3px 6px); height: 3px;
    }
    @media (max-width: 900px) {
      .growth-calc-layout { grid-template-columns: 1fr; }
      .area-row { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      .summary-grid { grid-template-columns: 1fr; }
      .control-input-wrap input { width: 4.75rem; }
    }
  `],
})
export class PropertyGrowthCalculatorComponent implements OnInit, OnDestroy {
  readonly minInvestment = MIN_INVESTMENT;
  readonly maxInvestment = MAX_INVESTMENT;
  readonly minMonthly = MIN_MONTHLY;
  readonly maxMonthly = MAX_MONTHLY;
  readonly minYears = MIN_YEARS;
  readonly maxYears = MAX_YEARS;
  readonly minRate = MIN_RATE;
  readonly maxRate = MAX_RATE;
  readonly ranges: MarketRange[] = ['YTD', '1Y', '3Y', '5Y', '10Y', 'MAX'];
  readonly pad = { l: 56, r: 16, t: 16, b: 36 };
  readonly innerW = 640 - 56 - 16;
  readonly innerH = 360 - 16 - 36;

  states: string[] = getStateNames();
  cities: string[] = [];
  localities: MarketAreaDto[] = [];
  selectedState = '';
  selectedCity = '';
  selectedLocationId: number | null = null;
  selectedRange: MarketRange = '5Y';

  investmentAmount = DEFAULT_INVESTMENT;
  monthlyContribution = DEFAULT_MONTHLY;
  years = DEFAULT_YEARS;
  expectedRatePct = FALLBACK_CAGR;
  regionalRatePct = FALLBACK_CAGR;
  latestAvgPricePerSqft: number | null = null;
  latestRentalYieldPct: number | null = null;
  rangeReturnPct: number | null = null;
  dataMessage = '';
  loading = false;

  regionalFinal = 0;
  userFinal = 0;
  regionalPolyline = '';
  userPolyline = '';
  yGrid: { y: number; label: string }[] = [];
  xLabels: { x: number; year: number }[] = [];
  chartDots: { rx: number; ry: number; ux: number; uy: number }[] = [];
  forecastSplitX: number | null = null;
  chartAriaLabel = '';

  private refresh$ = new Subject<void>();
  private sub?: Subscription;
  private cityAreaId: number | null = null;
  private cityAreaByName = new Map<string, number>();

  constructor(private marketStats: MarketStatsService) {}

  ngOnInit(): void {
    this.sub = this.refresh$
      .pipe(
        debounceTime(180),
        switchMap(() => {
          const areaId = this.selectedLocationId ?? this.cityAreaId;
          if (!areaId) {
            this.applyLocalFallback();
            return of(null);
          }
          this.loading = true;
          return this.marketStats
            .project({
              areaId,
              range: this.selectedRange,
              initialAmount: this.investmentAmount,
              monthlyContribution: this.monthlyContribution,
              years: this.years,
              expectedRatePct: this.expectedRatePct,
            })
            .pipe(
              catchError(() => {
                this.applyLocalFallback();
                this.dataMessage = 'Could not load market data. Showing illustrative projection.';
                this.loading = false;
                return of(null);
              }),
            );
        }),
      )
      .subscribe((res) => {
        this.loading = false;
        if (res) this.applyProjection(res);
      });

    this.marketStats.listAreas({ level: 'STATE' }).subscribe({
      next: (areas) => {
        const apiStates = (areas || []).filter((a) => a.active).map((a) => a.name);
        this.states = apiStates.length ? apiStates : getStateNames();
        this.applyDefaultSelection();
      },
      error: () => {
        this.states = getStateNames();
        this.applyDefaultSelection();
      },
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  onStateChange(): void {
    this.cities = this.selectedState ? getCitiesForState(this.selectedState) : [];
    this.selectedCity = '';
    this.localities = [];
    this.selectedLocationId = null;
    this.cityAreaId = null;
    this.cityAreaByName.clear();
    if (!this.selectedState) {
      this.refresh$.next();
      return;
    }
    this.marketStats.listAreas({ state: this.selectedState, level: 'CITY' }).subscribe({
      next: (areas) => {
        const apiCities = (areas || []).filter((a) => a.active);
        if (apiCities.length) {
          this.cities = apiCities.map((c) => c.name);
          this.cityAreaByName.clear();
          apiCities.forEach((c) => this.cityAreaByName.set(c.name.toLowerCase(), c.id));
        } else if (!this.cities.length) {
          this.cities = getCitiesForState(this.selectedState);
        }
        const preferred = this.cities.includes('Mumbai')
          ? 'Mumbai'
          : this.cities.includes('New Delhi')
            ? 'New Delhi'
            : this.cities[0] || '';
        if (preferred) {
          this.selectedCity = preferred;
          this.onCityChange();
        } else {
          this.refresh$.next();
        }
      },
      error: () => {
        this.cities = getCitiesForState(this.selectedState);
        this.refresh$.next();
      },
    });
  }

  onCityChange(): void {
    this.localities = [];
    this.selectedLocationId = null;
    this.cityAreaId = this.cityAreaByName.get(this.selectedCity.toLowerCase()) ?? null;
    if (!this.selectedState || !this.selectedCity) {
      this.refresh$.next();
      return;
    }
    this.marketStats
      .listAreas({ state: this.selectedState, city: this.selectedCity, level: 'LOCALITY' })
      .subscribe({
        next: (locs) => {
          this.localities = locs || [];
          if (this.localities.length) {
            this.selectedLocationId = this.localities[0].id;
          }
          if (!this.cityAreaId) {
            this.marketStats
              .listAreas({ state: this.selectedState, level: 'CITY' })
              .subscribe({
                next: (cities) => {
                  const match = (cities || []).find(
                    (c) => c.name.toLowerCase() === this.selectedCity.toLowerCase(),
                  );
                  this.cityAreaId = match?.id ?? null;
                  this.refresh$.next();
                },
                error: () => this.refresh$.next(),
              });
          } else {
            this.refresh$.next();
          }
        },
        error: () => this.refresh$.next(),
      });
  }

  onLocationChange(): void {
    this.refresh$.next();
  }

  setRange(r: MarketRange): void {
    this.selectedRange = r;
    this.refresh$.next();
  }

  setInvestment(v: number | string): void {
    this.investmentAmount = this.clamp(Number(v), this.minInvestment, this.maxInvestment);
    this.refresh$.next();
  }

  setMonthly(v: number | string): void {
    this.monthlyContribution = this.clamp(Number(v), this.minMonthly, this.maxMonthly);
    this.refresh$.next();
  }

  setYears(v: number | string): void {
    this.years = Math.round(this.clamp(Number(v), this.minYears, this.maxYears));
    this.refresh$.next();
  }

  setRate(v: number | string): void {
    const n = Number(v);
    if (!Number.isFinite(n)) return;
    this.expectedRatePct = Math.round(this.clamp(n, this.minRate, this.maxRate) * 10) / 10;
    this.refresh$.next();
  }

  private applyProjection(res: MarketProjectionResponse): void {
    const m = res.market;
    this.regionalRatePct = Number(res.regionalRatePct ?? FALLBACK_CAGR);
    this.regionalFinal = Number(res.regionalFinal ?? 0);
    this.userFinal = Number(res.userFinal ?? 0);
    this.latestAvgPricePerSqft = m?.latestAvgPricePerSqft != null ? Number(m.latestAvgPricePerSqft) : null;
    this.latestRentalYieldPct = m?.latestRentalYieldPct != null ? Number(m.latestRentalYieldPct) : null;
    this.rangeReturnPct = m?.rangeReturnPct != null ? Number(m.rangeReturnPct) : null;
    this.dataMessage = m?.dataAvailable ? '' : (m?.message || 'No market statistics for this area yet.');
    if (m?.derivedCagrPct != null && !this.userRateTouched()) {
      // keep user rate in sync only when still at fallback
    }
    this.renderChart((res.points || []).map((p) => ({
      year: p.year,
      regional: Number(p.regional),
      user: Number(p.user),
      forecast: !!p.forecast,
    })));
  }

  private applyDefaultSelection(): void {
    if (this.states.includes('Maharashtra')) {
      this.selectedState = 'Maharashtra';
      this.onStateChange();
      return;
    }
    if (this.states.length) {
      this.selectedState = this.states[0];
      this.onStateChange();
      return;
    }
    this.refresh$.next();
  }

  private userRateTouched(): boolean {
    return Math.abs(this.expectedRatePct - FALLBACK_CAGR) > 0.05;
  }

  private applyLocalFallback(): void {
    this.regionalRatePct = FALLBACK_CAGR;
    this.latestAvgPricePerSqft = null;
    this.latestRentalYieldPct = null;
    this.rangeReturnPct = null;
    const points: MarketProjectionPoint[] = [];
    for (let y = 0; y <= this.years; y++) {
      points.push({
        year: y,
        regional: this.lumpSum(this.investmentAmount, this.regionalRatePct, y),
        user: this.portfolio(this.investmentAmount, this.monthlyContribution, this.expectedRatePct, y),
        forecast: y > 0,
      });
    }
    this.regionalFinal = points[points.length - 1].regional;
    this.userFinal = points[points.length - 1].user;
    this.renderChart(points);
  }

  private renderChart(points: MarketProjectionPoint[]): void {
    if (!points.length) {
      this.regionalPolyline = '';
      this.userPolyline = '';
      this.yGrid = [];
      this.xLabels = [];
      this.chartDots = [];
      this.forecastSplitX = null;
      return;
    }
    const maxYear = Math.max(...points.map((p) => p.year), 1);
    const maxValue = Math.max(1, ...points.map((p) => Math.max(p.regional, p.user))) * 1.08;
    this.regionalPolyline = points
      .map((p) => `${this.xForYear(p.year, maxYear)},${this.yForValue(p.regional, maxValue)}`)
      .join(' ');
    this.userPolyline = points
      .map((p) => `${this.xForYear(p.year, maxYear)},${this.yForValue(p.user, maxValue)}`)
      .join(' ');

    const steps = 4;
    this.yGrid = [];
    for (let i = 0; i <= steps; i++) {
      const value = (maxValue * i) / steps;
      this.yGrid.push({ y: this.yForValue(value, maxValue), label: this.shortInr(value) });
    }
    const xStep = Math.max(1, Math.ceil(maxYear / 5));
    this.xLabels = [];
    for (let y = 0; y <= maxYear; y += xStep) {
      this.xLabels.push({ x: this.xForYear(y, maxYear), year: y });
    }
    const dotStep = Math.max(1, Math.ceil(maxYear / 6));
    this.chartDots = points
      .filter((p) => p.year % dotStep === 0 || p.year === maxYear)
      .map((p) => ({
        rx: this.xForYear(p.year, maxYear),
        ry: this.yForValue(p.regional, maxValue),
        ux: this.xForYear(p.year, maxYear),
        uy: this.yForValue(p.user, maxValue),
      }));

    const lastHist = [...points].reverse().find((p) => !p.forecast);
    this.forecastSplitX = lastHist != null ? this.xForYear(lastHist.year, maxYear) : null;

    this.chartAriaLabel =
      `Area market ends at ${this.shortInr(this.regionalFinal)}, your projection at ${this.shortInr(this.userFinal)}`;
  }

  private xForYear(year: number, maxYear: number): number {
    return this.pad.l + (year / Math.max(maxYear, 1)) * this.innerW;
  }

  private yForValue(value: number, maxValue: number): number {
    return this.pad.t + this.innerH - (value / maxValue) * this.innerH;
  }

  private clamp(n: number, min: number, max: number): number {
    if (!Number.isFinite(n)) return min;
    return Math.min(max, Math.max(min, n));
  }

  private lumpSum(p: number, annualPct: number, years: number): number {
    return p * Math.pow(1 + annualPct / 100, years);
  }

  private portfolio(p: number, m: number, annualPct: number, years: number): number {
    const r = annualPct / 100 / 12;
    const n = years * 12;
    let fv = p * Math.pow(1 + r, n);
    if (r !== 0) fv += m * ((Math.pow(1 + r, n) - 1) / r);
    else fv += m * n;
    return fv;
  }

  private shortInr(v: number): string {
    const abs = Math.abs(v);
    if (abs >= 1_00_00_000) return (v / 1_00_00_000).toFixed(1) + 'Cr';
    if (abs >= 1_00_000) return (v / 1_00_000).toFixed(1) + 'L';
    if (abs >= 1000) return (v / 1000).toFixed(0) + 'k';
    return String(Math.round(v));
  }
}
