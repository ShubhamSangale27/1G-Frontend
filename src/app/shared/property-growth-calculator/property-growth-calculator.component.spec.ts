import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PropertyGrowthCalculatorComponent } from './property-growth-calculator.component';
import { MarketAreaDto, MarketStatsService } from '../../core/services/market-stats.service';
import { IndianPricePipe } from '../pipes/indian-price.pipe';

describe('PropertyGrowthCalculatorComponent', () => {
  let fixture: ComponentFixture<PropertyGrowthCalculatorComponent>;
  let component: PropertyGrowthCalculatorComponent;
  let marketStats: jasmine.SpyObj<MarketStatsService>;

  const stateMaharashtra: MarketAreaDto = {
    id: 1,
    parentId: null,
    level: 'STATE',
    name: 'Maharashtra',
    active: true,
    sortOrder: 0,
  };
  const cityMumbai: MarketAreaDto = {
    id: 2,
    parentId: 1,
    level: 'CITY',
    name: 'Mumbai',
    stateName: 'Maharashtra',
    cityName: 'Mumbai',
    active: true,
    sortOrder: 0,
  };
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
  const locBandra: MarketAreaDto = {
    id: 10,
    parentId: 2,
    level: 'LOCALITY',
    name: 'Bandra',
    stateName: 'Maharashtra',
    cityName: 'Mumbai',
    active: true,
    sortOrder: 1,
  };
  const stateGoa: MarketAreaDto = {
    id: 50,
    parentId: null,
    level: 'STATE',
    name: 'Goa',
    active: true,
    sortOrder: 1,
  };
  const cityPanaji: MarketAreaDto = {
    id: 51,
    parentId: 50,
    level: 'CITY',
    name: 'Panaji',
    stateName: 'Goa',
    cityName: 'Panaji',
    active: true,
    sortOrder: 0,
  };

  function mockListAreas(
    extra?: Partial<{
      states: MarketAreaDto[];
      citiesByParent: Record<number, MarketAreaDto[]>;
      localitiesByParent: Record<number, MarketAreaDto[]>;
    }>,
  ) {
    const states = extra?.states ?? [stateMaharashtra];
    const citiesByParent = extra?.citiesByParent ?? { 1: [cityMumbai] };
    const localitiesByParent = extra?.localitiesByParent ?? { 2: [locAndheri] };

    marketStats.listAreas.and.callFake((params: { parentId?: number; level?: string }) => {
      if (params?.level === 'STATE') return of(states);
      if (params?.level === 'CITY' && params.parentId != null) {
        return of(citiesByParent[params.parentId] ?? []);
      }
      if (params?.level === 'LOCALITY' && params.parentId != null) {
        return of(localitiesByParent[params.parentId] ?? []);
      }
      return of([]);
    });
  }

  beforeEach(async () => {
    marketStats = jasmine.createSpyObj('MarketStatsService', ['listAreas', 'getStats', 'project']);
    mockListAreas();
    marketStats.project.and.returnValue(
      of({
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

  it('loads states from API only and defaults range to 5Y', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.stateAreas.length).toBe(1);
    expect(component.stateAreas[0].name).toBe('Maharashtra');
    expect(component.selectedRange).toBe('5Y');
    expect(marketStats.listAreas).toHaveBeenCalledWith({ level: 'STATE' });
  }));

  it('cascades cities and localities via parentId when state changes', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(component.selectedStateId).toBe(1);
    expect(component.cityAreas.length).toBe(1);
    expect(component.selectedCityId).toBe(2);
    expect(component.localities.length).toBe(1);
    expect(component.selectedLocationId).toBe(9);
    expect(marketStats.listAreas).toHaveBeenCalledWith({ parentId: 1, level: 'CITY' });
    expect(marketStats.listAreas).toHaveBeenCalledWith({ parentId: 2, level: 'LOCALITY' });
  }));

  it('shows admin-added state and city not in static lists', fakeAsync(() => {
    mockListAreas({
      states: [stateGoa, stateMaharashtra],
      citiesByParent: { 50: [cityPanaji], 1: [cityMumbai] },
      localitiesByParent: { 51: [], 2: [locAndheri] },
    });
    fixture.detectChanges();
    tick();
    component.selectedStateId = 50;
    component.onStateChange();
    tick();
    expect(component.cityAreas.map((c) => c.name)).toEqual(['Panaji']);
    expect(component.selectedCityId).toBe(51);
  }));

  it('requires locality selection when multiple localities exist', fakeAsync(() => {
    mockListAreas({
      localitiesByParent: { 2: [locAndheri, locBandra] },
    });
    fixture.detectChanges();
    tick();
    expect(component.localities.length).toBe(2);
    expect(component.selectedLocationId).toBeNull();
    tick(250);
    expect(component.dataMessage).toContain('Select a location');
    expect(marketStats.project).not.toHaveBeenCalled();
  }));

  it('allows user to select locality when multiple exist', fakeAsync(() => {
    mockListAreas({
      localitiesByParent: { 2: [locAndheri, locBandra] },
    });
    fixture.detectChanges();
    tick();
    component.selectedLocationId = 10;
    component.onLocationChange();
    tick(250);
    expect(marketStats.project).toHaveBeenCalled();
    const lastCall = marketStats.project.calls.mostRecent().args[0];
    expect(lastCall.areaId).toBe(10);
  }));

  it('projects at city level when no localities configured', fakeAsync(() => {
    mockListAreas({ localitiesByParent: { 2: [] } });
    fixture.detectChanges();
    tick();
    expect(component.localities.length).toBe(0);
    expect(component.selectedLocationId).toBeNull();
    tick(250);
    expect(marketStats.project).toHaveBeenCalled();
    expect(marketStats.project.calls.mostRecent().args[0].areaId).toBe(2);
  }));

  it('shows message when no states configured', fakeAsync(() => {
    mockListAreas({ states: [] });
    fixture.detectChanges();
    tick();
    expect(component.stateAreas.length).toBe(0);
    expect(component.dataMessage).toContain('No market areas configured');
    expect(marketStats.project).not.toHaveBeenCalled();
  }));

  it('shows message when state has no cities', fakeAsync(() => {
    mockListAreas({ citiesByParent: { 1: [] } });
    fixture.detectChanges();
    tick(250);
    expect(component.cityAreas.length).toBe(0);
    expect(component.dataMessage).toContain('No cities configured');
  }));

  it('handles API failure when loading states', fakeAsync(() => {
    marketStats.listAreas.and.returnValue(throwError(() => new Error('network')));
    fixture.detectChanges();
    tick();
    expect(component.stateAreas.length).toBe(0);
    expect(component.dataMessage).toContain('Could not load market areas');
  }));

  it('switches range and requests projection', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    component.selectedLocationId = 9;
    component.setRange('1Y');
    tick(250);
    expect(marketStats.project).toHaveBeenCalled();
    const lastCall = marketStats.project.calls.mostRecent().args[0];
    expect(lastCall.range).toBe('1Y');
    expect(lastCall.areaId).toBe(9);
  }));

  it('renders empty-state message when API returns unavailable stats', fakeAsync(() => {
    marketStats.project.and.returnValue(
      of({
        market: {
          area: locAndheri,
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
    tick();
    component.selectedLocationId = 9;
    component.setRange('5Y');
    tick(250);
    expect(component.dataMessage).toContain('No market statistics');
  }));
});
