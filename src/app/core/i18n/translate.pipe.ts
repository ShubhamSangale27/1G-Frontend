import { Pipe, PipeTransform, inject } from '@angular/core';
import { I18nService } from './i18n.service';

/**
 * Impure translate pipe — re-evaluates after language changes (reads revision signal).
 * Usage: {{ 'home.heroTitle' | t }} or {{ 'search.found' | t:{ count: 12 } }}
 */
@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(key: string, params?: Record<string, string | number>): string {
    return this.i18n.t(key, params);
  }
}
