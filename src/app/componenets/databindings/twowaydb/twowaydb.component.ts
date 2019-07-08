import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  template: `
    <p>
      <input type="text" [(ngModel)]="name"/> <br>
      {{name}}
    </p>
  `,
  styles: []
})
export class TwowaydbComponent implements OnInit {

  pi:number=3.14;
  name:string;
  constructor() {
    this.name = "brian";
   }
  
  ngOnInit() {
  }

}
