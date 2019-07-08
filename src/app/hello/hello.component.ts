import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  template: `
  <p>
    {{ greeting}} works! <br>
    <input type="text" [value]=defaultValue/>
    <img [src]=imageURL />
    <input type="submit" (click) = "display();" />
  </p>
 `,
  styles: ["p{color:green;}"]
})
export class HelloComponent implements OnInit {

  greeting = "Hello testing";
  defaultValue: string;
  imageURL: string;


  constructor() { 
    this.imageURL = "https://thumbs-prod.si-cdn.com/s-rtW1rEAQTIGcmUVNFSSPC4s3I=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg";
    this.defaultValue = "Name";
  }
  ngOnInit() {
  }

display(){
  console.log(this.defaultValue);
}

}
