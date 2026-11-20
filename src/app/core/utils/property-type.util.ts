import { PropertyType } from '../models/property.model';

/** Canonical API property types after Apartment → Flat rename. */
export const PROPERTY_TYPES: PropertyType[] = ['HOUSE', 'FLAT', 'LAND', 'COMMERCIAL', 'PG'];

/** Maps legacy APARTMENT to FLAT for UI filters and forms. */
export function normalizePropertyType(type: string | null | undefined): PropertyType | '' {
  if (!type) return '';
  if (type === 'APARTMENT') return 'FLAT';
  if ((PROPERTY_TYPES as string[]).includes(type)) return type as PropertyType;
  return '';
}

export function propertyTypeDisplayKey(type: string | null | undefined): string {
  const n = normalizePropertyType(type) || type || '';
  return n ? `propertyType.${n}` : '';
}
