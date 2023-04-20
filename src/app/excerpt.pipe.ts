import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 100)+'...';
  }

}
