import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonevalidate'
})
export class PhonevalidatePipe implements PipeTransform {

  transform(control1: string, control2: any): unknown {
    return null;
  }

}
