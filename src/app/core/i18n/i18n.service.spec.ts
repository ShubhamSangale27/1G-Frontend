import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    localStorage.removeItem('1g_lang');
    service = new I18nService();
  });

  it('defaults to English', () => {
    expect(service.lang()).toBe('en');
    expect(service.t('nav.home')).toBe('Home');
  });

  it('switches to Hindi and Marathi', () => {
    service.setLanguage('hi');
    expect(service.lang()).toBe('hi');
    expect(service.t('nav.home')).toBe('होम');
    expect(service.t('common.soldOut')).toBe('बिक चुका');

    service.setLanguage('mr');
    expect(service.lang()).toBe('mr');
    expect(service.t('nav.home')).toBe('मुख्यपृष्ठ');
    expect(service.t('common.soldOut')).toBe('विकले');
  });

  it('persists language preference', () => {
    service.setLanguage('hi');
    const again = new I18nService();
    expect(again.lang()).toBe('hi');
  });

  it('falls back to key when missing', () => {
    expect(service.t('missing.key.xyz')).toBe('missing.key.xyz');
  });

  it('maps property types including legacy apartment', () => {
    expect(service.propertyTypeLabel('FLAT')).toBe('Flat');
    expect(service.propertyTypeLabel('APARTMENT')).toBe('Flat');
    expect(service.propertyTypeLabel('PG')).toBe('PG');
    service.setLanguage('hi');
    expect(service.propertyTypeLabel('FLAT')).toBe('फ्लैट');
  });

  it('ignores invalid language codes', () => {
    service.setLanguage('hi');
    service.setLanguage('fr' as any);
    expect(service.lang()).toBe('hi');
  });
});
