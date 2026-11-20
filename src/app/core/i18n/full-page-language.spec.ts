import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { of } from 'rxjs';
import { HomeComponent } from '../../features/home/home.component';
import { SearchComponent } from '../../features/search/search.component';
import { LoginComponent } from '../../features/auth/login/login.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { I18nService } from './i18n.service';
import { AuthService } from '../services/auth.service';
import { ConfigService } from '../services/config.service';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';

/**
 * Proves language switch updates full-page content (home/search/login/footer),
 * not only the header/status-bar chrome.
 */
describe('Full-page language switch', () => {
  let i18n: I18nService;

  const apiStub = {
    get: jasmine.createSpy('get').and.callFake((url: string) => {
      if (url.includes('/properties')) {
        return of({ content: [], totalElements: 0, totalPages: 0, number: 0, size: 12 });
      }
      if (url.includes('/carousel')) {
        return of([]);
      }
      if (url.includes('/featured')) {
        return of([]);
      }
      return of([]);
    }),
    post: () => of({}),
  };

  beforeEach(async () => {
    localStorage.removeItem('1g_lang');
    await TestBed.configureTestingModule({
      imports: [HomeComponent, SearchComponent, LoginComponent, FooterComponent, HeaderComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        I18nService,
        { provide: ConfigService, useValue: { apiUrl: 'http://localhost/api' } },
        {
          provide: AuthService,
          useValue: {
            isLoggedIn: () => false,
            user: signal(null),
            logout: () => undefined,
          },
        },
        { provide: ApiService, useValue: apiStub },
        { provide: ToastrService, useValue: { success: () => undefined, error: () => undefined } },
      ],
    }).compileComponents();
    i18n = TestBed.inject(I18nService);
  });

  function textOf(fixture: ComponentFixture<unknown>): string {
    return (fixture.nativeElement as HTMLElement).textContent || '';
  }

  it('translates home hero, services, categories, CTA when language changes', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('Find Your Dream Property');
    expect(textOf(fixture)).toContain('Browse by Category');
    expect(textOf(fixture)).toContain('Ready to List Your Property?');

    i18n.setLanguage('hi');
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('अपनी सपनों की संपत्ति खोजें');
    expect(textOf(fixture)).toContain('श्रेणी के अनुसार देखें');
    expect(textOf(fixture)).toContain('अपनी संपत्ति सूचीबद्ध करने के लिए तैयार हैं?');
    expect(textOf(fixture)).not.toContain('Find Your Dream Property');

    i18n.setLanguage('mr');
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('तुमची स्वप्नातील मालमत्ता शोधा');
    expect(textOf(fixture)).not.toContain('अपनी सपनों की संपत्ति खोजें');
  });

  it('translates search page filters and results chrome', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('Find Your Perfect Property');
    expect(textOf(fixture)).toContain('Filters');
    expect(textOf(fixture)).toContain('Search Results');

    i18n.setLanguage('hi');
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('अपनी परफेक्ट संपत्ति खोजें');
    expect(textOf(fixture)).toContain('फ़िल्टर');
    expect(textOf(fixture)).toContain('खोज परिणाम');
    expect(textOf(fixture)).not.toContain('Find Your Perfect Property');
  });

  it('translates login page body (not just nav)', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('Welcome Back');
    expect(textOf(fixture)).toContain('Email Address');

    i18n.setLanguage('hi');
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('फिर से स्वागत है');
    expect(textOf(fixture)).toContain('ईमेल पता');
    expect(textOf(fixture)).not.toContain('Welcome Back');
  });

  it('translates footer links and tagline with language change', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('Quick Links');
    expect(textOf(fixture)).toContain('All rights reserved.');

    i18n.setLanguage('mr');
    fixture.detectChanges();
    expect(textOf(fixture)).toContain('द्रुत दुवे');
    expect(textOf(fixture)).toContain('सर्व हक्क राखीव.');
  });

  it('header language select updates home page content in the same session', async () => {
    const header = TestBed.createComponent(HeaderComponent);
    const home = TestBed.createComponent(HomeComponent);
    header.detectChanges();
    home.detectChanges();

    expect(textOf(home)).toContain('Find Your Dream Property');

    header.componentInstance.onLanguageChange('hi');
    await Promise.resolve(); // flush setLanguage microtask (appRef.tick)
    header.detectChanges();
    home.detectChanges();

    expect(i18n.lang()).toBe('hi');
    expect(i18n.t('nav.search')).toBe('खोजें');
    expect(textOf(home)).toContain('अपनी सपनों की संपत्ति खोजें');
    expect(textOf(header)).toContain('खोजें');
  });
});
