import { Component, Input } from '@angular/core';

export type BrandLogoVariant = 'compact' | 'auth' | 'footer' | 'splash';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  template: `
    <img
      class="brand-logo"
      [class.brand-logo--compact]="variant === 'compact'"
      [class.brand-logo--auth]="variant === 'auth'"
      [class.brand-logo--footer]="variant === 'footer'"
      [class.brand-logo--splash]="variant === 'splash'"
      src="assets/images/1G_logo.png"
      alt="1Guntha.com — घर प्रत्येकासाठी"
      loading="eager"
      decoding="async"
    />
  `,
  styles: [`
    .brand-logo {
      display: block;
      width: auto;
      max-width: 100%;
      height: auto;
      object-fit: contain;
      user-select: none;
    }
    /* Header / nav — tall vertical mark, height-capped for sticky bar */
    .brand-logo--compact {
      height: clamp(2rem, 5.5vw, 2.75rem);
      width: auto;
    }
    /* Auth cards — full logo with tagline */
    .brand-logo--auth {
      width: min(11rem, 78vw);
      max-height: min(14rem, 42vh);
      margin: 0 auto 1rem;
    }
    /* Footer */
    .brand-logo--footer {
      height: clamp(3rem, 8vw, 4.5rem);
      width: auto;
      margin-bottom: 0.75rem;
    }
    /* Hero / landing emphasis */
    .brand-logo--splash {
      width: min(14rem, 82vw);
      max-height: min(18rem, 48vh);
      margin: 0 auto;
    }
    @media (max-width: 480px) {
      .brand-logo--compact {
        height: clamp(1.75rem, 7vw, 2.25rem);
      }
    }
    @media (min-width: 1200px) {
      .brand-logo--compact {
        height: 2.875rem;
      }
    }
  `],
})
export class BrandLogoComponent {
  @Input() variant: BrandLogoVariant = 'compact';
}
