import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({
    name: 'productfilter',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: Product[], filter: Product): Product[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: Product) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Product} to compare to the filter.
   * @param {Product} filter The filter to apply.
   * @return {boolean} True if Product satisfies filters, false if not.
   */
  applyFilter(product: Product, filter: Product): boolean {
    for (let field in filter) {
        if (typeof filter[field] === 'boolean') {
          if (product[field] == filter[field]) {
            return true;
          }
      }
      //TODO: This needs to be changed: Adding preliminary checks in case of different types
      if (typeof filter[field] === 'string') {
          if (product[field] == filter[field]) {
            return true;
          }
      }
    }
    return false;
  }
}
