import { Component, Input } from '@angular/core';

export type BrandLogoVariant = 'compact' | 'auth' | 'footer';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  template: `
    <img
      class="brand-logo"
      [class.brand-logo--compact]="variant === 'compact'"
      [class.brand-logo--auth]="variant === 'auth'"
      [class.brand-logo--footer]="variant === 'footer'"
      src="assets/images/1G_logo.png"
      alt="1Guntha.com"
      loading="eager"
      decoding="async"
    />
  `,
  styles: [`
    .brand-logo {
      display: block;
      width: auto;
      max-width: 100%;
      object-fit: contain;
      user-select: none;
    }
    .brand-logo--compact {
      height: clamp(1.75rem, 4.5vw, 2.625rem);
    }
    .brand-logo--auth {
      width: min(14rem, 72vw);
      height: auto;
      margin: 0 auto 1rem;
    }
    .brand-logo--footer {
      height: clamp(2.25rem, 5.5vw, 3.25rem);
      margin-bottom: 0.75rem;
    }
  `],
})
export class BrandLogoComponent {
  @Input() variant: BrandLogoVariant = 'compact';
}
