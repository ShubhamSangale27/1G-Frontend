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

  listLocalities(state: string, city: string): Observable<MarketAreaDto[]> {
    return this.api.get<MarketAreaDto[]>('/market-stats/areas', {
      state,
      city,
      level: 'LOCALITY',
    });
  }

  getStatsByLocation(params: {
    state: string;
    city: string;
    localityId?: number | null;
    range: MarketRange;
  }): Observable<MarketStatsResponse> {
    const q: Record<string, string | number> = {
      state: params.state,
      city: params.city,
      range: params.range,
    };
    if (params.localityId != null) q['localityId'] = params.localityId;
    return this.api.get<MarketStatsResponse>('/market-stats', q);
  }

  project(body: {
    state: string;
    city: string;
    localityId?: number | null;
    range: MarketRange;
    initialAmount: number;
    monthlyContribution: number;
    years: number;
    expectedRatePct?: number | null;
  }): Observable<MarketProjectionResponse> {
    const payload: Record<string, unknown> = {
      state: body.state,
      city: body.city,
      range: body.range,
      initialAmount: body.initialAmount,
      monthlyContribution: body.monthlyContribution,
      years: body.years,
      expectedRatePct: body.expectedRatePct,
    };
    if (body.localityId != null) payload['localityId'] = body.localityId;
    return this.api.post<MarketProjectionResponse>('/market-stats/projection', payload);
  }
}
