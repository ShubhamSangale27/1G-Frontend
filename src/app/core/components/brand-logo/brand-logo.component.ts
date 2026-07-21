import { Component, Input } from '@angular/core';

export type BrandLogoVariant = 'compact' | 'auth' | 'footer' | 'splash';

/** Devanagari tagline rendered as live text for crisp glyphs at all sizes. */
export const BRAND_TAGLINE = 'घर प्रत्येकासाठी';

@Component({
  selector: 'app-brand-logo',
  standalone: true,
  template: `
    <div
      class="brand-lockup"
      [class.brand-lockup--compact]="variant === 'compact'"
      [class.brand-lockup--auth]="variant === 'auth'"
      [class.brand-lockup--footer]="variant === 'footer'"
      [class.brand-lockup--splash]="variant === 'splash'"
      role="img"
      [attr.aria-label]="'1Guntha.com — ' + tagline"
    >
      <img
        class="brand-lockup__image"
        src="assets/images/1G_logo_lockup.png"
        srcset="
          assets/images/1G_logo_lockup.png 1x,
          assets/images/1G_logo_lockup@2x.png 2x,
          assets/images/1G_logo_lockup@3x.png 3x
        "
        alt="1Guntha.com"
        loading="eager"
        decoding="async"
      />
      <p class="brand-lockup__tagline" lang="mr">{{ tagline }}</p>
    </div>
  `,
  styles: [`
    .brand-lockup {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      user-select: none;
      line-height: 1.2;
    }
    .brand-lockup__image {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    .brand-lockup__tagline {
      margin: 0.15rem 0 0;
      font-family: 'Noto Sans Devanagari', 'DM Sans', sans-serif;
      font-weight: 600;
      color: #e8751a;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }
    .brand-lockup--compact {
      width: clamp(4.5rem, 22vw, 6rem);
    }
    .brand-lockup--compact .brand-lockup__tagline {
      font-size: clamp(0.65rem, 2.2vw, 0.75rem);
    }
    .brand-lockup--auth {
      width: min(13rem, 85vw);
      margin: 0 auto 1rem;
    }
    .brand-lockup--auth .brand-lockup__tagline {
      font-size: clamp(0.8rem, 2.8vw, 0.95rem);
    }
    .brand-lockup--footer {
      width: min(11rem, 72vw);
      margin-bottom: 0.75rem;
    }
    .brand-lockup--footer .brand-lockup__tagline {
      font-size: clamp(0.7rem, 2.4vw, 0.85rem);
    }
    .brand-lockup--splash {
      width: min(16rem, 88vw);
      margin: 0 auto;
    }
    .brand-lockup--splash .brand-lockup__tagline {
      font-size: clamp(0.85rem, 3vw, 1.05rem);
    }
    @media (max-width: 480px) {
      .brand-lockup--compact {
        width: clamp(4rem, 24vw, 5.5rem);
      }
    }
  `],
})
export class BrandLogoComponent {
  @Input() variant: BrandLogoVariant = 'compact';
  readonly tagline = BRAND_TAGLINE;
}
