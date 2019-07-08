import { Component, OnInit, Directive, Input, ViewChild } from '@angular/core';


@Directive({selector:'pane'})
export class Pane {
  @Input() id:string;
}
@Component({
  selector: 'app-viewchild',
  template: `
    <pane id = "1" *ngIf="shouldShow">
    Pane one details
    </pane>
    <pane id = "2" *ngIf="!shouldShow">
    Pane two details
    </pane>

    <button (click) = "toggle()"> Toggle </button>
    <p>Pane Loaded {{selectedPane}}</p>
  `,
  styles: []
})
export class ViewchildComponent implements OnInit {

  shouldShow:boolean = true;
  selectedPane:string;
  constructor() { }

  ngOnInit() {
  }

  @ViewChild(Pane, {static: false})
  set pane(v:Pane){
    setTimeout( () => {this.selectedPane = v.id}, 0)

  }

  toggle(){
    this.shouldShow = !this.shouldShow;

  }

}
