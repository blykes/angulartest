import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngpipe',
  template: ` <div>
    <p>
      A: {{a | currency:'USD':false}}
      B: {{b | currency:'USD':true:4.2-2 }}
      ngpipe works! {{name|uppercase}} <br>
      {{dates | date:'long'}}<br>

      Exponential: {{num | Streexponentialngth:5}}
    </p>
  `,
  styles: []
})
export class NgpipeComponent implements OnInit {

  name:string = "brian";
  dates:Date = new Date (2019, 0, 28);
  a:number = 0.259;
  b:number = 1.3495;

  num:number = 5;
  constructor() { }

  ngOnInit() {
  }

}
