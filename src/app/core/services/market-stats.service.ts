import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type MarketRange = 'YTD' | '1Y' | '3Y' | '5Y' | '10Y' | 'MAX';

export interface MarketAreaDto {
  id: number;
  parentId: number | null;
  level: 'STATE' | 'CITY' | 'LOCALITY' | string;
  name: string;
  stateName?: string;
  cityName?: string;
  active: boolean;
  sortOrder: number;
}

export interface MarketHistoryPoint {
  date: string;
  index: number;
  avgPricePerSqft?: number | null;
}

export interface MarketStatsResponse {
  area: MarketAreaDto;
  range: string;
  dataAvailable: boolean;
  message?: string;
  latestIndex?: number;
  latestAvgPricePerSqft?: number | null;
  latestRentalYieldPct?: number | null;
  rangeReturnPct?: number | null;
  derivedCagrPct?: number | null;
  coverageFrom?: string;
  coverageTo?: string;
  history: MarketHistoryPoint[];
}

export interface MarketProjectionPoint {
  year: number;
  regional: number;
  user: number;
  forecast: boolean;
}

export interface MarketProjectionResponse {
  market: MarketStatsResponse;
  regionalRatePct: number;
  userRatePct: number;
  regionalFinal: number;
  userFinal: number;
  points: MarketProjectionPoint[];
}

@Injectable({ providedIn: 'root' })
export class MarketStatsService {
  constructor(private api: ApiService) {}

  listAreas(params: {
    parentId?: number;
    state?: string;
    city?: string;
    level?: string;
  } = {}): Observable<MarketAreaDto[]> {
    const q: Record<string, string | number | boolean> = {};
    if (params.parentId != null) q['parentId'] = params.parentId;
    if (params.state) q['state'] = params.state;
    if (params.city) q['city'] = params.city;
    if (params.level) q['level'] = params.level;
    return this.api.get<MarketAreaDto[]>('/market-stats/areas', q);
  }

  getStats(areaId: number, range: MarketRange): Observable<MarketStatsResponse> {
    return this.api.get<MarketStatsResponse>('/market-stats', { areaId, range });
  }

  project(body: {
    areaId: number;
    range: MarketRange;
    initialAmount: number;
    monthlyContribution: number;
    years: number;
    expectedRatePct?: number | null;
  }): Observable<MarketProjectionResponse> {
    return this.api.post<MarketProjectionResponse>('/market-stats/projection', body);
  }
}
