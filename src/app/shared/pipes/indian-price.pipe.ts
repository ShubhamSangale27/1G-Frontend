import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianPrice',
  standalone: true,
})
export class IndianPricePipe implements PipeTransform {
  transform(value: number | string | null | undefined): string {
    if (value === null || value === undefined || value === '') return '₹ 0';
    const amount = Number(value);
    if (!Number.isFinite(amount)) return '₹ 0';

    const absAmount = Math.abs(amount);
    const sign = amount < 0 ? '-' : '';
    const crore = 1_00_00_000;
    const lakh = 1_00_000;

    if (absAmount >= crore) {
      return `₹ ${sign}${this.trimZeros((absAmount / crore).toFixed(2))} Cr`;
    }
    if (absAmount >= lakh) {
      return `₹ ${sign}${this.trimZeros((absAmount / lakh).toFixed(2))} L`;
    }
    return `₹ ${sign}${absAmount.toLocaleString('en-IN')}`;
  }

  private trimZeros(input: string): string {
    return input.replace(/\.00$/, '').replace(/(\.\d*[1-9])0$/, '$1');
  }
}

