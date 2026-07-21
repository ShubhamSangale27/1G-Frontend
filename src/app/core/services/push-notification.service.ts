import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

export type PushLinkTarget = 'APP' | 'EXTERNAL';
export type PushTargetRole = 'ALL' | 'USER' | 'AGENT';

export interface SendPushNotificationRequest {
  title: string;
  body: string;
  imageUrl?: string;
  linkUrl?: string;
  linkTarget?: PushLinkTarget;
  targetRole?: PushTargetRole;
}

export interface SendPushNotificationResponse {
  campaignId: number;
  sentCount: number;
  failedCount: number;
  message: string;
}

export interface PushCampaignDto {
  id: number;
  title: string;
  body: string;
  imageUrl?: string;
  linkUrl?: string;
  linkTarget: PushLinkTarget;
  targetRole: PushTargetRole;
  sentCount: number;
  failedCount: number;
  createdAt: string;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  constructor(private api: ApiService) {}

  send(request: SendPushNotificationRequest): Observable<SendPushNotificationResponse> {
    return this.api.post<SendPushNotificationResponse>('/admin/push-notifications/send', request);
  }

  list(page = 0, size = 20): Observable<PageResponse<PushCampaignDto>> {
    return this.api.get<PageResponse<PushCampaignDto>>('/admin/push-notifications', { page, size });
  }
}
