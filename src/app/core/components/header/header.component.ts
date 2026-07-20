import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { resolvePropertyImageUrl } from '../../utils/image-url.util';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, BrandLogoComponent],
  template: `
    <header class="header">
      <div class="container header-inner">
        <a routerLink="/" class="logo" aria-label="1Guntha home">
          <app-brand-logo variant="compact" />
        </a>
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <span>Home</span>
          </a>
          <a routerLink="/search" routerLinkActive="active">
            <span>Search</span>
          </a>
          <a routerLink="/blog" routerLinkActive="active">
            <span>Blog</span>
          </a>
          <ng-container *ngIf="auth.isLoggedIn() && auth.user() as u">
            <a routerLink="/dashboard" routerLinkActive="active">
              <span>Dashboard</span>
            </a>
            <a routerLink="/my-properties" routerLinkActive="active">
              <span>My Properties</span>
            </a>
            <a routerLink="/property/new" class="btn btn-accent btn-sm">
              <span>+ List Property</span>
            </a>
            <a *ngIf="u.role === 'AGENT' || u.role === 'ADMIN'" routerLink="/agent" routerLinkActive="active">
              <span>Agent</span>
            </a>
            <a *ngIf="u.role === 'ADMIN'" routerLink="/admin" routerLinkActive="active">
              <span>Admin</span>
            </a>
            <a *ngIf="u.role === 'BLOG' || u.role === 'ADMIN'" routerLink="/blog-editor" routerLinkActive="active">
              <span>Blog Studio</span>
            </a>
            <div class="user-menu">
              <a routerLink="/profile" class="user-menu-link" title="Edit profile">
                @if (avatarUrl(u)) {
                  <img [src]="avatarUrl(u)!" alt="" class="user-avatar-img" />
                } @else {
                  <div class="user-avatar">{{ u.fullName.charAt(0) }}</div>
                }
                <div class="user-info">
                  <div class="user-name">{{ u.fullName }}</div>
                  <div class="user-email">{{ u.email }}</div>
                </div>
              </a>
            </div>
            <button type="button" class="btn btn-outline btn-sm" (click)="auth.logout()">Logout</button>
          </ng-container>
          <ng-container *ngIf="!auth.isLoggedIn()">
            <a routerLink="/login" routerLinkActive="active">Login</a>
            <a routerLink="/signup" class="btn btn-primary btn-sm">Sign Up</a>
          </ng-container>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: var(--surface);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      position: sticky;
      top: 0;
      z-index: 1000;
      border-bottom: 2px solid var(--border-light);
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.95);
    }
    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.5rem;
      max-width: 1400px;
      margin: 0 auto;
      box-sizing: border-box;
    }
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      flex-shrink: 0;
    }
    .nav {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .nav a {
      color: var(--text-secondary);
      font-weight: 500;
      padding: 0.625rem 1rem;
      border-radius: var(--radius-sm);
      transition: var(--transition);
      text-decoration: none;
      font-size: 0.9375rem;
      position: relative;
    }
    .nav a:not(.btn):hover {
      background: var(--bg);
      color: var(--primary);
    }
    .nav a.active:not(.btn) {
      color: var(--primary);
      background: rgba(14, 165, 233, 0.1);
      font-weight: 600;
    }
    .nav a.active:not(.btn)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 3px;
      background: var(--primary);
      border-radius: 2px 2px 0 0;
    }
    .user-menu {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.25rem;
      background: var(--bg);
      border-radius: var(--radius);
      margin-right: 0.5rem;
      border: 1px solid var(--border);
    }
    .user-menu-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.25rem 0.75rem 0.25rem 0.25rem;
      text-decoration: none;
      color: inherit;
      border-radius: var(--radius-sm);
    }
    .user-menu-link:hover {
      background: rgba(14, 165, 233, 0.08);
    }
    .user-avatar,
    .user-avatar-img {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: var(--shadow-sm);
    }
    .user-avatar {
      background: var(--primary-gradient);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9375rem;
    }
    .user-avatar-img {
      object-fit: cover;
      display: block;
    }
    .user-info {
      display: none;
    }
    .user-name {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--text);
      line-height: 1.2;
    }
    .user-email {
      font-size: 0.75rem;
      color: var(--text-muted);
      line-height: 1.2;
    }
    @media (min-width: 1024px) {
      .user-info {
        display: block;
      }
    }
    @media (max-width: 768px) {
      .header-inner {
        padding: 0.75rem 1rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .nav {
        gap: 0.25rem;
        order: 3;
        width: 100%;
        justify-content: flex-start;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 2px;
      }
      .nav a {
        padding: 0.5rem 0.6rem;
        font-size: 0.8125rem;
        white-space: nowrap;
      }
      .user-menu .user-info {
        display: none;
      }
    }
    @media (max-width: 480px) {
      .header-inner {
        padding: 0.5rem 0.75rem;
      }
      .nav a {
        padding: 0.4rem 0.5rem;
        font-size: 0.75rem;
      }
    }
  `],
})
export class HeaderComponent {
  constructor(
    public auth: AuthService,
    private config: ConfigService,
  ) {}

  avatarUrl(u: { profileImageUrl?: string }): string | null {
    if (!u.profileImageUrl) return null;
    return resolvePropertyImageUrl(u.profileImageUrl, this.config.apiUrl);
  }
}
