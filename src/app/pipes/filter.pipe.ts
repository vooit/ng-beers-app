import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {

    if (!term) return value;
    return (value || []).filter((item) => {
      return keys.split(',').
      some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').
      test(item[key])))
    };
  }
}
