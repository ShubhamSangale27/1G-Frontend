import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrandLogoComponent } from '../brand-logo/brand-logo.component';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule, BrandLogoComponent, TranslatePipe],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-logo">
              <app-brand-logo variant="footer" />
            </div>
            <p>{{ 'footer.tagline' | t }}</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>{{ 'footer.quickLinks' | t }}</h4>
            <ul>
              <li><a routerLink="/">{{ 'nav.home' | t }}</a></li>
              <li><a routerLink="/search">{{ 'footer.searchProperties' | t }}</a></li>
              <li><a routerLink="/property/new">{{ 'footer.listProperty' | t }}</a></li>
              <li><a routerLink="/dashboard">{{ 'nav.dashboard' | t }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>{{ 'footer.forBuyers' | t }}</h4>
            <ul>
              <li><a routerLink="/search" [queryParams]="{listingType: 'SALE'}">{{ 'footer.buyProperties' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{propertyType: 'HOUSE'}">{{ 'footer.houses' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{propertyType: 'FLAT'}">{{ 'footer.flats' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{propertyType: 'PG'}">{{ 'footer.pg' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{propertyType: 'COMMERCIAL'}">{{ 'footer.commercial' | t }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>{{ 'footer.forRenters' | t }}</h4>
            <ul>
              <li><a routerLink="/search" [queryParams]="{listingType: 'RENT'}">{{ 'footer.rentProperties' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{listingType: 'RENT', propertyType: 'FLAT'}">{{ 'footer.rentFlats' | t }}</a></li>
              <li><a routerLink="/search" [queryParams]="{listingType: 'RENT', propertyType: 'HOUSE'}">{{ 'footer.rentHouses' | t }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>{{ 'footer.support' | t }}</h4>
            <ul>
              <li><a routerLink="/login">{{ 'nav.login' | t }}</a></li>
              <li><a routerLink="/signup">{{ 'nav.signup' | t }}</a></li>
              <li><a href="mailto:support@1guntha.com">{{ 'footer.contact' | t }}</a></li>
              <li><a href="#">{{ 'footer.help' | t }}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ year }} 1Guntha.com. {{ 'footer.rights' | t }}</p>
          <div class="footer-links">
            <a href="#">{{ 'footer.privacy' | t }}</a>
            <a href="#">{{ 'footer.terms' | t }}</a>
            <a href="#">{{ 'footer.cookies' | t }}</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--footer-bg);
      color: var(--footer-muted);
      padding: 3rem 0 1.5rem;
      margin-top: 4rem;
      border-top: 1px solid var(--footer-border);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .footer-col h4 {
      color: var(--footer-text);
      font-size: 1rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .footer-logo {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
    }
    .footer-col p {
      font-size: 0.875rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    .footer-col ul { list-style: none; padding: 0; margin: 0; }
    .footer-col li { margin-bottom: 0.5rem; }
    .footer-col a {
      color: var(--footer-muted);
      text-decoration: none;
      font-size: 0.875rem;
    }
    .footer-col a:hover { color: var(--footer-text); }
    .social-links { display: flex; gap: 0.75rem; }
    .social-links a { font-size: 1.25rem; text-decoration: none; }
    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--footer-border);
      font-size: 0.8125rem;
    }
    .footer-links { display: flex; gap: 1.25rem; flex-wrap: wrap; }
    .footer-links a { color: var(--footer-muted); text-decoration: none; }
    .footer-links a:hover { color: var(--footer-text); }
    @media (max-width: 900px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 520px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
