import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {}

  private get api(): string {
    return this.config.apiUrl;
  }

  get<T>(
    path: string,
    params?: Record<string, string | number | boolean>,
    context?: HttpContext,
  ): Observable<T> {
    let options: { params?: HttpParams; context?: HttpContext } = {};
    if (params && Object.keys(params).length) {
      let httpParams = new HttpParams();
      Object.entries(params).forEach(([k, v]) => {
        httpParams = httpParams.set(k, String(v));
      });
      options.params = httpParams;
    }
    if (context) options.context = context;
    return this.http.get<T>(`${this.api}${path}`, options);
  }

  post<T>(path: string, body: unknown, context?: HttpContext): Observable<T> {
    return this.http.post<T>(`${this.api}${path}`, body, context ? { context } : {});
  }

  put<T>(path: string, body: unknown, context?: HttpContext): Observable<T> {
    return this.http.put<T>(`${this.api}${path}`, body, context ? { context } : {});
  }

  delete<T>(path: string, body?: unknown): Observable<T> {
    if (body !== undefined) {
      return this.http.request<T>('DELETE', `${this.api}${path}`, { body });
    }
    return this.http.delete<T>(`${this.api}${path}`);
  }

  /** Upload a file (e.g. image). Returns { url, thumbnailUrl } from backend. */
  uploadFile(path: string, file: File): Observable<{ url: string; thumbnailUrl: string }> {
    const formData = new FormData();
    formData.set('file', file);
    return this.http.post<{ url: string; thumbnailUrl: string }>(`${this.api}${path}`, formData);
  }
}
