import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyurl'
})
export class ModifyurlPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase().replace(/ /g, "-");
  }

}
