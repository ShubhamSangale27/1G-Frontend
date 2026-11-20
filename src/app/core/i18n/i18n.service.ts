import { ApplicationRef, Injectable, computed, inject, signal } from '@angular/core';
import { APP_LANGUAGES, AppLanguage, TRANSLATIONS } from './translations';

const STORAGE_KEY = '1g_lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly appRef = inject(ApplicationRef);

  readonly languages = APP_LANGUAGES;
  private readonly langSignal = signal<AppLanguage>(this.readStored());
  /** Bumps on every language change so impure pipes / templates refresh site-wide. */
  private readonly revisionSignal = signal(0);

  readonly lang = this.langSignal.asReadonly();
  readonly revision = this.revisionSignal.asReadonly();
  readonly langNativeLabel = computed(() => {
    const code = this.langSignal();
    return APP_LANGUAGES.find((l) => l.code === code)?.nativeLabel ?? code;
  });

  setLanguage(code: AppLanguage): void {
    if (!TRANSLATIONS[code]) return;
    this.langSignal.set(code);
    this.revisionSignal.update((n) => n + 1);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore quota / private mode */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = code === 'en' ? 'en' : code;
    }
    // Force a global change-detection pass so every page's `| t` bindings update.
    queueMicrotask(() => {
      try {
        this.appRef.tick();
      } catch {
        /* TestBed may destroy ApplicationRef between specs */
      }
    });
  }

  t(key: string, params?: Record<string, string | number>): string {
    // Touch revision so impure pipes re-evaluate after setLanguage.
    void this.revisionSignal();
    const dict = TRANSLATIONS[this.langSignal()] || TRANSLATIONS.en;
    let value = dict[key] ?? TRANSLATIONS.en[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        value = value.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), String(v));
      }
    }
    return value;
  }

  propertyTypeLabel(type: string | null | undefined): string {
    if (!type) return '';
    const normalized = type === 'APARTMENT' ? 'FLAT' : type;
    return this.t(`propertyType.${normalized}`);
  }

  listingTypeLabel(type: string | null | undefined): string {
    if (!type) return '';
    return this.t(`listingType.${type}`);
  }

  /** All catalog keys (for coverage tests). */
  allKeys(): string[] {
    return Object.keys(TRANSLATIONS.en);
  }

  private readStored(): AppLanguage {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === 'en' || raw === 'hi' || raw === 'mr') return raw;
    } catch {
      /* ignore */
    }
    return 'en';
  }
}
