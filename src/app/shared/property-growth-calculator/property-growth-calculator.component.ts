import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IndianPricePipe } from '../pipes/indian-price.pipe';

/**
 * Indicative real-estate growth assumptions (not investment advice).
 *
 * REGIONAL_ANNUAL_APPRECIATION_PCT (8.5): baseline CAGR for urban/metro
 * residential property in India over recent multi-year periods — used for the
 * "Regional market" chart line.
 *
 * User line compounds the same initial investment plus optional monthly
 * contributions at the user-selected expected appreciation rate.
 */
export const REGIONAL_ANNUAL_APPRECIATION_PCT = 8.5;
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

interface ChartPoint {
  year: number;
  regional: number;
  user: number;
}

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
            Compare an indicative regional real-estate appreciation path with your own investment
            projection over the same horizon.
          </p>
        </header>

        <div class="growth-calc-layout">
          <div class="growth-calc-controls">
            <div class="control-group">
              <div class="control-label-row">
                <label for="inv-amount">Initial investment</label>
                <div class="control-input-wrap">
                  <span class="prefix">₹</span>
                  <input
                    id="inv-amount"
                    type="number"
                    [ngModel]="investmentAmount"
                    (ngModelChange)="setInvestment($event)"
                    [min]="minInvestment"
                    [max]="maxInvestment"
                    step="50000"
                  />
                </div>
              </div>
              <input
                type="range"
                class="slider"
                [ngModel]="investmentAmount"
                (ngModelChange)="setInvestment($event)"
                [min]="minInvestment"
                [max]="maxInvestment"
                step="50000"
                aria-label="Initial investment slider"
              />
              <div class="range-hints">
                <span>{{ minInvestment | indianPrice }}</span>
                <span>{{ maxInvestment | indianPrice }}</span>
              </div>
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="monthly-amt">Monthly add-on</label>
                <div class="control-input-wrap">
                  <span class="prefix">₹</span>
                  <input
                    id="monthly-amt"
                    type="number"
                    [ngModel]="monthlyContribution"
                    (ngModelChange)="setMonthly($event)"
                    [min]="minMonthly"
                    [max]="maxMonthly"
                    step="1000"
                  />
                </div>
              </div>
              <input
                type="range"
                class="slider"
                [ngModel]="monthlyContribution"
                (ngModelChange)="setMonthly($event)"
                [min]="minMonthly"
                [max]="maxMonthly"
                step="1000"
                aria-label="Monthly contribution slider"
              />
              <div class="range-hints">
                <span>{{ minMonthly | indianPrice }}</span>
                <span>{{ maxMonthly | indianPrice }}</span>
              </div>
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="tenure-yrs">Horizon (years)</label>
                <div class="control-input-wrap">
                  <input
                    id="tenure-yrs"
                    type="number"
                    [ngModel]="years"
                    (ngModelChange)="setYears($event)"
                    [min]="minYears"
                    [max]="maxYears"
                    step="1"
                  />
                  <span class="suffix">yr</span>
                </div>
              </div>
              <input
                type="range"
                class="slider"
                [ngModel]="years"
                (ngModelChange)="setYears($event)"
                [min]="minYears"
                [max]="maxYears"
                step="1"
                aria-label="Investment horizon slider"
              />
              <div class="range-hints">
                <span>{{ minYears }} yr</span>
                <span>{{ maxYears }} yr</span>
              </div>
            </div>

            <div class="control-group">
              <div class="control-label-row">
                <label for="user-rate">Your expected appreciation</label>
                <div class="control-input-wrap">
                  <input
                    id="user-rate"
                    type="number"
                    [ngModel]="expectedRatePct"
                    (ngModelChange)="setRate($event)"
                    [min]="minRate"
                    [max]="maxRate"
                    step="0.1"
                  />
                  <span class="suffix">%</span>
                </div>
              </div>
              <input
                type="range"
                class="slider"
                [ngModel]="expectedRatePct"
                (ngModelChange)="setRate($event)"
                [min]="minRate"
                [max]="maxRate"
                step="0.1"
                aria-label="Expected appreciation rate slider"
              />
              <div class="range-hints">
                <span>{{ minRate }}%</span>
                <span>{{ maxRate }}%</span>
              </div>
            </div>

            <div class="summary-row">
              <div class="summary-item">
                <span class="summary-label">Regional market ({{ regionalRatePct }}% p.a.)</span>
                <strong class="summary-value regional">{{ regionalFinal | indianPrice }}</strong>
              </div>
              <div class="summary-item">
                <span class="summary-label">Your projection ({{ expectedRatePct }}% p.a.)</span>
                <strong class="summary-value user">{{ userFinal | indianPrice }}</strong>
              </div>
            </div>
            <p class="assumption-note">
              Regional line assumes {{ regionalRatePct }}% annual appreciation (indicative urban India CAGR).
              Your line compounds the initial amount plus monthly add-ons at your rate. Figures are illustrative only.
            </p>
          </div>

          <div class="growth-calc-chart" role="img" [attr.aria-label]="chartAriaLabel">
            <svg
              class="chart-svg"
              viewBox="0 0 640 360"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <g *ngFor="let gy of yGrid" class="grid-line">
                <line [attr.x1]="pad.l" [attr.x2]="innerW + pad.l" [attr.y1]="gy.y" [attr.y2]="gy.y" />
                <text [attr.x]="pad.l - 8" [attr.y]="gy.y + 4" text-anchor="end">{{ gy.label }}</text>
              </g>

              <g *ngFor="let gx of xLabels" class="x-label">
                <text [attr.x]="gx.x" [attr.y]="pad.t + innerH + 22" text-anchor="middle">Y{{ gx.year }}</text>
              </g>

              <polyline class="line-regional" fill="none" [attr.points]="regionalPolyline" />
              <polyline class="line-user" fill="none" [attr.points]="userPolyline" />

              <circle
                *ngFor="let p of chartDots"
                class="dot-regional"
                [attr.cx]="p.rx"
                [attr.cy]="p.ry"
                r="3.5"
              />
              <circle
                *ngFor="let p of chartDots"
                class="dot-user"
                [attr.cx]="p.ux"
                [attr.cy]="p.uy"
                r="3.5"
              />
            </svg>

            <div class="chart-legend">
              <span class="legend-item regional">
                <i></i> Regional market @ {{ regionalRatePct }}%
              </span>
              <span class="legend-item user">
                <i></i> Your investment @ {{ expectedRatePct }}%
              </span>
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

    .growth-calc-header {
      text-align: center;
      max-width: 40rem;
      margin: 0 auto 2.25rem;
    }

    .growth-calc-title {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.8vw, 2.125rem);
      font-weight: 800;
      margin: 0 0 0.5rem;
      color: var(--text);
      letter-spacing: -0.02em;
    }

    .growth-calc-sub {
      margin: 0;
      color: var(--text-muted);
      font-size: clamp(0.9375rem, 1.5vw, 1.0625rem);
      line-height: 1.55;
    }

    .growth-calc-layout {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
      gap: 2rem;
      align-items: start;
      max-width: 1120px;
      margin: 0 auto;
    }

    .growth-calc-controls {
      display: flex;
      flex-direction: column;
      gap: 1.35rem;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
    }

    .control-label-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .control-label-row label {
      font-weight: 600;
      font-size: 0.9375rem;
      color: var(--text);
    }

    .control-input-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 0.2rem 0.5rem;
      min-width: 7.5rem;
    }

    .control-input-wrap .prefix,
    .control-input-wrap .suffix {
      color: var(--text-muted);
      font-size: 0.8125rem;
      font-weight: 600;
    }

    .control-input-wrap input {
      border: 0;
      background: transparent;
      width: 5.5rem;
      font-family: var(--font-sans);
      font-size: 0.9375rem;
      font-weight: 700;
      color: var(--text);
      padding: 0.25rem 0;
      outline: none;
      -moz-appearance: textfield;
    }

    .control-input-wrap input::-webkit-outer-spin-button,
    .control-input-wrap input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 999px;
      background: var(--bg-tertiary);
      outline: none;
      cursor: pointer;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--primary);
      border: 2px solid var(--surface);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
      transition: var(--transition);
    }

    .slider::-webkit-slider-thumb:hover {
      background: var(--primary-dark);
    }

    .slider::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--primary);
      border: 2px solid var(--surface);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
    }

    .range-hints {
      display: flex;
      justify-content: space-between;
      font-size: 0.75rem;
      color: var(--text-light);
    }

    .summary-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin-top: 0.25rem;
    }

    .summary-item {
      padding: 0.85rem 1rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
    }

    .summary-label {
      display: block;
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-bottom: 0.35rem;
      line-height: 1.3;
    }

    .summary-value {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 700;
    }

    .summary-value.regional { color: var(--text-secondary); }
    .summary-value.user { color: var(--primary-dark); }

    .assumption-note {
      margin: 0;
      font-size: 0.75rem;
      color: var(--text-light);
      line-height: 1.45;
    }

    .growth-calc-chart {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 1.25rem 1rem 1rem;
      box-shadow: var(--shadow);
    }

    .chart-svg {
      width: 100%;
      height: auto;
      display: block;
    }

    .grid-line line {
      stroke: var(--border);
      stroke-width: 1;
    }

    .grid-line text,
    .x-label text {
      fill: var(--text-muted);
      font-size: 11px;
      font-family: var(--font-sans);
    }

    .line-regional {
      stroke: var(--text-secondary);
      stroke-width: 2.25;
      stroke-dasharray: 6 4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .line-user {
      stroke: var(--primary);
      stroke-width: 2.75;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .dot-regional { fill: var(--text-secondary); }
    .dot-user { fill: var(--primary); }

    .chart-legend {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem 1.5rem;
      justify-content: center;
      margin-top: 0.75rem;
      font-size: 0.8125rem;
      color: var(--text-secondary);
      font-weight: 600;
    }

    .legend-item {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }

    .legend-item i {
      display: inline-block;
      width: 18px;
      height: 3px;
      border-radius: 2px;
    }

    .legend-item.regional i {
      background: var(--text-secondary);
      background: repeating-linear-gradient(
        90deg,
        var(--text-secondary) 0 6px,
        transparent 6px 10px
      );
      height: 3px;
    }

    .legend-item.user i {
      background: var(--primary);
    }

    @media (max-width: 900px) {
      .growth-calc-layout {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .summary-row {
        grid-template-columns: 1fr;
      }
      .control-input-wrap input {
        width: 4.75rem;
      }
    }
  `],
})
export class PropertyGrowthCalculatorComponent {
  readonly regionalRatePct = REGIONAL_ANNUAL_APPRECIATION_PCT;
  readonly minInvestment = MIN_INVESTMENT;
  readonly maxInvestment = MAX_INVESTMENT;
  readonly minMonthly = MIN_MONTHLY;
  readonly maxMonthly = MAX_MONTHLY;
  readonly minYears = MIN_YEARS;
  readonly maxYears = MAX_YEARS;
  readonly minRate = MIN_RATE;
  readonly maxRate = MAX_RATE;

  readonly pad = { l: 56, r: 16, t: 16, b: 36 };
  readonly innerW = 640 - 56 - 16;
  readonly innerH = 360 - 16 - 36;

  investmentAmount = DEFAULT_INVESTMENT;
  monthlyContribution = DEFAULT_MONTHLY;
  years = DEFAULT_YEARS;
  expectedRatePct = REGIONAL_ANNUAL_APPRECIATION_PCT;

  regionalFinal = 0;
  userFinal = 0;
  regionalPolyline = '';
  userPolyline = '';
  yGrid: { y: number; label: string }[] = [];
  xLabels: { x: number; year: number }[] = [];
  chartDots: { rx: number; ry: number; ux: number; uy: number }[] = [];
  chartAriaLabel = '';

  constructor() {
    this.recompute();
  }

  setInvestment(v: number | string): void {
    this.investmentAmount = this.clamp(Number(v), this.minInvestment, this.maxInvestment);
    this.recompute();
  }

  setMonthly(v: number | string): void {
    this.monthlyContribution = this.clamp(Number(v), this.minMonthly, this.maxMonthly);
    this.recompute();
  }

  setYears(v: number | string): void {
    this.years = Math.round(this.clamp(Number(v), this.minYears, this.maxYears));
    this.recompute();
  }

  setRate(v: number | string): void {
    const n = Number(v);
    if (!Number.isFinite(n)) return;
    this.expectedRatePct = Math.round(this.clamp(n, this.minRate, this.maxRate) * 10) / 10;
    this.recompute();
  }

  private recompute(): void {
    const points = this.buildPoints();
    const maxValue = Math.max(1, ...points.map((p) => Math.max(p.regional, p.user))) * 1.08;

    this.regionalFinal = points[points.length - 1]?.regional ?? 0;
    this.userFinal = points[points.length - 1]?.user ?? 0;
    this.regionalPolyline = points
      .map((p) => `${this.xForYear(p.year)},${this.yForValue(p.regional, maxValue)}`)
      .join(' ');
    this.userPolyline = points
      .map((p) => `${this.xForYear(p.year)},${this.yForValue(p.user, maxValue)}`)
      .join(' ');

    const steps = 4;
    this.yGrid = [];
    for (let i = 0; i <= steps; i++) {
      const val = (maxValue * i) / steps;
      this.yGrid.push({
        y: this.pad.t + this.innerH - (val / maxValue) * this.innerH,
        label: this.shortInr(val),
      });
    }

    const xStep = Math.max(1, Math.ceil(this.years / 5));
    this.xLabels = [];
    for (let y = 0; y <= this.years; y += xStep) {
      this.xLabels.push({ x: this.xForYear(y), year: y });
    }
    if (this.xLabels[this.xLabels.length - 1]?.year !== this.years) {
      this.xLabels.push({ x: this.xForYear(this.years), year: this.years });
    }

    const dotStep = Math.max(1, Math.ceil(this.years / 6));
    this.chartDots = points
      .filter((p) => p.year % dotStep === 0 || p.year === this.years)
      .map((p) => ({
        rx: this.xForYear(p.year),
        ry: this.yForValue(p.regional, maxValue),
        ux: this.xForYear(p.year),
        uy: this.yForValue(p.user, maxValue),
      }));

    this.chartAriaLabel =
      `Line chart comparing regional property growth at ${this.regionalRatePct}% ` +
      `with your projection at ${this.expectedRatePct}% over ${this.years} years.`;
  }

  private buildPoints(): ChartPoint[] {
    const out: ChartPoint[] = [];
    const rRegion = this.regionalRatePct / 100;
    const rUser = this.expectedRatePct / 100;
    for (let y = 0; y <= this.years; y++) {
      out.push({
        year: y,
        regional: this.lumpSumFuture(this.investmentAmount, rRegion, y),
        user: this.portfolioFuture(this.investmentAmount, this.monthlyContribution, rUser, y),
      });
    }
    return out;
  }

  /** Lump-sum compound: P * (1 + r)^t */
  private lumpSumFuture(principal: number, annualRate: number, years: number): number {
    return principal * Math.pow(1 + annualRate, years);
  }

  /**
   * Lump sum + monthly SIP-style contributions compounded monthly.
   * FV = P*(1+r_m)^(12t) + M * [((1+r_m)^(12t) - 1) / r_m]
   */
  private portfolioFuture(
    principal: number,
    monthly: number,
    annualRate: number,
    years: number
  ): number {
    if (years <= 0) return principal;
    const months = years * 12;
    const rm = annualRate / 12;
    const lump = principal * Math.pow(1 + rm, months);
    if (monthly <= 0 || rm === 0) {
      return lump + monthly * months;
    }
    const sip = monthly * ((Math.pow(1 + rm, months) - 1) / rm);
    return lump + sip;
  }

  private xForYear(year: number): number {
    const t = this.years === 0 ? 0 : year / this.years;
    return this.pad.l + t * this.innerW;
  }

  private yForValue(value: number, maxValue: number): number {
    return this.pad.t + this.innerH - (value / maxValue) * this.innerH;
  }

  private shortInr(n: number): string {
    if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(1)}Cr`;
    if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(0)}L`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
    return `${Math.round(n)}`;
  }

  private clamp(n: number, min: number, max: number): number {
    if (!Number.isFinite(n)) return min;
    return Math.min(max, Math.max(min, n));
  }
}
