import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], expression?: any, reverse?: boolean): any {
    let array: any[] = value.sort((a: any, b: any): number => {
      return a[expression] > b[expression] ? 1 : -1;
    });

    if (reverse) {
      return array.reverse();
    }
    return array;
  }
}
