import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PropertyGrowthCalculatorComponent } from './property-growth-calculator.component';
import { MarketAreaDto, MarketStatsService } from '../../core/services/market-stats.service';
import { IndianPricePipe } from '../pipes/indian-price.pipe';
import { getStateNames, getCitiesForState } from '../../core/data/indian-locations';

describe('PropertyGrowthCalculatorComponent', () => {
  let fixture: ComponentFixture<PropertyGrowthCalculatorComponent>;
  let component: PropertyGrowthCalculatorComponent;
  let marketStats: jasmine.SpyObj<MarketStatsService>;

  const locAndheri: MarketAreaDto = {
    id: 9,
    parentId: 2,
    level: 'LOCALITY',
    name: 'Andheri',
    stateName: 'Maharashtra',
    cityName: 'Mumbai',
    active: true,
    sortOrder: 0,
  };

  const projectionResponse = {
    market: {
      area: locAndheri,
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
  };

  beforeEach(async () => {
    marketStats = jasmine.createSpyObj('MarketStatsService', ['listLocalities', 'getStatsByLocation', 'project']);
    marketStats.listLocalities.and.returnValue(of([locAndheri]));
    marketStats.project.and.returnValue(of(projectionResponse));

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

  it('uses static state list from indian-locations', () => {
    expect(component.states).toEqual(getStateNames());
    expect(component.states.length).toBeGreaterThan(30);
  });

  it('loads cities from static list when state changes', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    component.selectedState = 'Maharashtra';
    component.onStateChange();
    tick();
    expect(component.cities).toEqual(getCitiesForState('Maharashtra'));
    expect(component.selectedCity).toBe('Mumbai');
  }));

  it('loads admin localities from API for static state/city', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(marketStats.listLocalities).toHaveBeenCalledWith('Maharashtra', 'Mumbai');
    expect(component.localities.length).toBe(1);
  }));

  it('projects with city benchmark when no locality selected', fakeAsync(() => {
    marketStats.listLocalities.and.returnValue(of([]));
    fixture.detectChanges();
    tick();
    tick(250);
    expect(marketStats.project).toHaveBeenCalled();
    const args = marketStats.project.calls.mostRecent().args[0];
    expect(args.state).toBe('Maharashtra');
    expect(args.city).toBe('Mumbai');
    expect(args.localityId).toBeNull();
  }));

  it('projects with locality when user selects one', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    component.selectedLocationId = 9;
    component.onLocationChange();
    tick(250);
    const args = marketStats.project.calls.mostRecent().args[0];
    expect(args.localityId).toBe(9);
  }));

  it('shows snapshot-based message when stats available', fakeAsync(() => {
    marketStats.project.and.returnValue(
      of({
        ...projectionResponse,
        market: {
          ...projectionResponse.market,
          dataAvailable: true,
          message: 'Based on 2 admin snapshot(s) from 2021-03-31 to 2026-03-31.',
        },
        points: [
          { year: 0, regional: 1000000, user: 1000000, forecast: false },
          { year: 3, regional: 1300000, user: 1200000, forecast: false },
          { year: 10, regional: 1800000, user: 2000000, forecast: true },
        ],
      }),
    );
    fixture.detectChanges();
    tick(250);
    expect(component.dataMessage).toContain('admin snapshot');
    expect(component.regionalPolyline.length).toBeGreaterThan(0);
  }));

  it('shows benchmark message when stats unavailable', fakeAsync(() => {
    marketStats.project.and.returnValue(
      of({
        ...projectionResponse,
        market: {
          ...projectionResponse.market,
          dataAvailable: false,
          message: 'Using market average growth rate of 7.20% p.a. for Mumbai, Maharashtra.',
        },
      }),
    );
    fixture.detectChanges();
    tick(250);
    expect(component.dataMessage).toContain('market average');
  }));

  it('handles locality API failure gracefully', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    marketStats.listLocalities.and.returnValue(throwError(() => new Error('network')));
    component.selectedState = 'Goa';
    component.onStateChange();
    tick();
    tick(250);
    expect(component.localities.length).toBe(0);
    expect(component.selectedCity).toBe('Panaji');
    expect(marketStats.project).toHaveBeenCalled();
  }));

  it('does not project without state and city', fakeAsync(() => {
    fixture.detectChanges();
    component.selectedState = '';
    component.selectedCity = '';
    component.onStateChange();
    tick(250);
    expect(component.dataMessage).toContain('Select a state and city');
  }));
});
