import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { NextLevelComponent } from './next-level/next-level.component';
import { TwowaydbComponent } from './componenets/databindings/twowaydb/twowaydb.component';
import { HidingComponent } from './componenets/hiding/hiding.component';
import { NgforComponent } from './componenets/directives/ngfor/ngfor.component';
import { NgswitchComponent } from './componenets/directives/ngswitch/ngswitch.component';
import { NgsclassComponent } from './componenets/directives/ngclass/ngclass.component';
import { NgpipeComponent } from './componenets/pipes/ngpipe/ngpipe.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { VoteparentComponent } from './componenets/inoutcomm/voteparent/voteparent.component';
import { VotedetailsComponent } from './componenets/inoutcomm/votedetails/votedetails.component';
import { ViewchildComponent, Pane } from './componenets/viewchildex/viewchild/viewchild.component';
import { LoggingcomponentComponent } from './componenets/loggingcomponent/loggingcomponent.component';
import { LoggingService } from './services/logging.service';
import { HttpbinComponent } from './componenets/httpbin/httpbin.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NextLevelComponent,
    TwowaydbComponent,
    HidingComponent,
    NgforComponent,
    NgswitchComponent,
    NgsclassComponent,
    NgpipeComponent,
    ExponentialStrengthPipe,
    VoteparentComponent,
    VotedetailsComponent,
    ViewchildComponent, 
    Pane, LoggingcomponentComponent, HttpbinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [LoggingService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
