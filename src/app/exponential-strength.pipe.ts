import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Streexponentialngth'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, expo: number): number {


    return value * (isNaN(expo)?1:expo);
  }

}
