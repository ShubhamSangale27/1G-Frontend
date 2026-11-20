import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PropertyCardComponent } from './property-card.component';
import { ConfigService } from '../../core/services/config.service';
import { I18nService } from '../../core/i18n/i18n.service';
import { Property } from '../../core/models/property.model';

describe('PropertyCardComponent', () => {
  let fixture: ComponentFixture<PropertyCardComponent>;
  let component: PropertyCardComponent;

  const baseProperty: Property = {
    id: 1,
    title: 'Test Flat',
    listingType: 'SALE',
    propertyType: 'FLAT',
    price: 5000000,
    address: 'Addr',
    city: 'Mumbai',
    soldOut: false,
    images: [{ imageUrl: 'https://example.com/a.jpg', mediaType: 'IMAGE' }],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyCardComponent],
      providers: [
        provideRouter([]),
        { provide: ConfigService, useValue: { apiUrl: 'http://localhost/api' } },
        I18nService,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PropertyCardComponent);
    component = fixture.componentInstance;
  });

  it('shows sold-out sticker when soldOut is true', () => {
    component.property = { ...baseProperty, soldOut: true };
    fixture.detectChanges();
    const sticker = fixture.nativeElement.querySelector('.sold-out-sticker');
    expect(sticker).toBeTruthy();
    expect(sticker.textContent).toContain('Sold Out');
    expect(fixture.nativeElement.querySelector('.property-card').classList).toContain('is-sold-out');
  });

  it('hides sold-out sticker when available', () => {
    component.property = { ...baseProperty, soldOut: false };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sold-out-sticker')).toBeFalsy();
  });

  it('treats missing soldOut as available', () => {
    const { soldOut, ...rest } = baseProperty;
    component.property = rest as Property;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.sold-out-sticker')).toBeFalsy();
  });

  it('displays Flat label for FLAT and APARTMENT', () => {
    component.property = { ...baseProperty, propertyType: 'FLAT' };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.property-type').textContent).toContain('Flat');

    component.property = { ...baseProperty, propertyType: 'APARTMENT' };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.property-type').textContent).toContain('Flat');
  });

  it('displays PG label', () => {
    component.property = { ...baseProperty, propertyType: 'PG' };
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.property-type').textContent).toContain('PG');
  });
});
