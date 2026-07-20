import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { PropertyGrowthCalculatorComponent } from './property-growth-calculator.component';
import { MarketStatsService } from '../../core/services/market-stats.service';
import { IndianPricePipe } from '../pipes/indian-price.pipe';

describe('PropertyGrowthCalculatorComponent', () => {
  let fixture: ComponentFixture<PropertyGrowthCalculatorComponent>;
  let component: PropertyGrowthCalculatorComponent;
  let marketStats: jasmine.SpyObj<MarketStatsService>;

  beforeEach(async () => {
    marketStats = jasmine.createSpyObj('MarketStatsService', ['listAreas', 'getStats', 'project']);
    marketStats.listAreas.and.returnValue(of([]));
    marketStats.project.and.returnValue(
      of({
        market: {
          area: { id: 1, parentId: null, level: 'LOCALITY', name: 'Andheri', active: true, sortOrder: 0 },
          range: '5Y',
          dataAvailable: true,
          derivedCagrPct: 8.5,
          latestAvgPricePerSqft: 22000,
          rangeReturnPct: 40,
          history: [],
        },
        regionalRatePct: 8.5,
        userRatePct: 8.5,
        regionalFinal: 2000000,
        userFinal: 2500000,
        points: [
          { year: 0, regional: 1000000, user: 1000000, forecast: false },
          { year: 5, regional: 1500000, user: 1800000, forecast: true },
        ],
      }),
    );

    await TestBed.configureTestingModule({
      imports: [PropertyGrowthCalculatorComponent],
      providers: [
        { provide: MarketStatsService, useValue: marketStats },
        IndianPricePipe,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyGrowthCalculatorComponent);
    component = fixture.componentInstance;
  });

  it('loads states and defaults range to 5Y', () => {
    fixture.detectChanges();
    expect(component.states.length).toBeGreaterThan(0);
    expect(component.selectedRange).toBe('5Y');
  });

  it('cascades cities when state changes', () => {
    fixture.detectChanges();
    component.selectedState = 'Maharashtra';
    component.onStateChange();
    expect(component.cities.length).toBeGreaterThan(0);
    expect(component.selectedCity).toBe('');
    expect(component.localities.length).toBe(0);
  });

  it('switches range and requests projection', fakeAsync(() => {
    fixture.detectChanges();
    component.selectedLocationId = 9;
    component.setRange('1Y');
    tick(250);
    expect(marketStats.project).toHaveBeenCalled();
    const lastCall = marketStats.project.calls.mostRecent().args[0];
    expect(lastCall.range).toBe('1Y');
    expect(lastCall.areaId).toBe(9);
  }));

  it('renders empty-state message when API returns unavailable', fakeAsync(() => {
    marketStats.project.and.returnValue(
      of({
        market: {
          area: { id: 2, parentId: null, level: 'LOCALITY', name: 'X', active: true, sortOrder: 0 },
          range: '5Y',
          dataAvailable: false,
          message: 'No market statistics available for this area yet. An admin can add snapshots.',
          derivedCagrPct: 8.5,
          history: [],
        },
        regionalRatePct: 8.5,
        userRatePct: 8.5,
        regionalFinal: 100,
        userFinal: 100,
        points: [{ year: 0, regional: 100, user: 100, forecast: false }],
      }),
    );
    fixture.detectChanges();
    component.selectedLocationId = 2;
    component.setRange('5Y');
    tick(250);
    expect(component.dataMessage).toContain('No market statistics');
  }));
});
