import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './components/navi/navi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendeeComponent } from './components/attendee/attendee.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    AttendeeComponent,
    EventDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
