import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngsclass',
  templateUrl: './ngclass.components.html',
  styleUrls: ["./ngClass.components.css"]
})
export class NgsclassComponent implements OnInit {

  isGreen;
  isBlue;
  isWhite;
  isBlack;
  
  constructor() { }

  ngOnInit() {
  }

}
