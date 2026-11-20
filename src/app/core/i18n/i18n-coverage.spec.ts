import { EN, HI, MR, TRANSLATIONS } from './translations';

describe('i18n catalog coverage', () => {
  const enKeys = Object.keys(EN).sort();

  it('EN catalog is non-empty', () => {
    expect(enKeys.length).toBeGreaterThan(50);
  });

  it('HI includes every EN key', () => {
    const missing = enKeys.filter((k) => !(k in HI));
    expect(missing).withContext(`Missing HI keys: ${missing.join(', ')}`).toEqual([]);
  });

  it('MR includes every EN key', () => {
    const missing = enKeys.filter((k) => !(k in MR));
    expect(missing).withContext(`Missing MR keys: ${missing.join(', ')}`).toEqual([]);
  });

  it('TRANSLATIONS exposes en/hi/mr', () => {
    expect(Object.keys(TRANSLATIONS).sort()).toEqual(['en', 'hi', 'mr']);
  });

  it('HI and MR differ from EN for core public pages', () => {
    const sample = [
      'home.heroTitle',
      'search.title',
      'auth.welcomeBack',
      'growth.title',
      'faq.title',
      'footer.tagline',
      'common.soldOut',
    ];
    for (const key of sample) {
      expect(HI[key]).withContext(key).not.toBe(EN[key]);
      expect(MR[key]).withContext(key).not.toBe(EN[key]);
    }
  });

  it('interpolates params consistently across languages', () => {
    expect(EN['search.found']).toContain('{{count}}');
    expect(HI['search.found']).toContain('{{count}}');
    expect(MR['search.found']).toContain('{{count}}');
    expect(EN['search.bhkPlus']).toContain('{{n}}');
    expect(EN['common.pageOf']).toContain('{{page}}');
  });
});
