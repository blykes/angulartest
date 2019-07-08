import { Component, OnInit } from '@angular/core';
import { MethodCall } from '@angular/compiler';


@Component({
  selector: 'app-hiding',
  template: `
    <div [hidden] = "divStatus">
    content in div
    </div>
    <input type="text" value="value"/> <br>
    <input type ="submit" (click)="method()" />
  `,
  styles: []
})
export class HidingComponent implements OnInit {

  divStatus:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  method(){
      this.divStatus = !this.divStatus;
  }
}
