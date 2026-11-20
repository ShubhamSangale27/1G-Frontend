import { normalizePropertyType, PROPERTY_TYPES, propertyTypeDisplayKey } from './property-type.util';

describe('property-type.util', () => {
  it('includes Flat and PG', () => {
    expect(PROPERTY_TYPES).toContain('FLAT');
    expect(PROPERTY_TYPES).toContain('PG');
    expect(PROPERTY_TYPES).not.toContain('APARTMENT');
  });

  it('normalizes legacy apartment to flat', () => {
    expect(normalizePropertyType('APARTMENT')).toBe('FLAT');
    expect(normalizePropertyType('apartment' as any)).toBe('');
    expect(normalizePropertyType('FLAT')).toBe('FLAT');
    expect(normalizePropertyType('PG')).toBe('PG');
  });

  it('handles empty and unknown', () => {
    expect(normalizePropertyType(null)).toBe('');
    expect(normalizePropertyType(undefined)).toBe('');
    expect(normalizePropertyType('VILLA')).toBe('');
  });

  it('builds display keys', () => {
    expect(propertyTypeDisplayKey('APARTMENT')).toBe('propertyType.FLAT');
    expect(propertyTypeDisplayKey('PG')).toBe('propertyType.PG');
  });
});
