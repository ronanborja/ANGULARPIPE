import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(fancytitle: string, fibonacci?: number): unknown {
    return fibonacci + ' ****  ' + fancytitle + ' ***** ' + fibonacci;
  }

}
