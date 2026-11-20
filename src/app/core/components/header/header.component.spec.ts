import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AuthService } from '../../services/auth.service';
import { ConfigService } from '../../services/config.service';
import { I18nService } from '../../i18n/i18n.service';
import { signal } from '@angular/core';

describe('HeaderComponent language switcher', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let i18n: I18nService;

  beforeEach(async () => {
    localStorage.removeItem('1g_lang');
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
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
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    i18n = TestBed.inject(I18nService);
    fixture.detectChanges();
  });

  it('renders language select with EN/HI/MR', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('.lang-select');
    expect(select).toBeTruthy();
    const values = Array.from(select.options).map((o) => o.value);
    expect(values).toEqual(['en', 'hi', 'mr']);
  });

  it('changes language via select', () => {
    const select: HTMLSelectElement = fixture.nativeElement.querySelector('.lang-select');
    select.value = 'hi';
    select.dispatchEvent(new Event('change'));
    fixture.componentInstance.onLanguageChange('hi');
    fixture.detectChanges();
    expect(i18n.lang()).toBe('hi');
    expect(fixture.nativeElement.textContent).toContain('खोजें');
  });
});
