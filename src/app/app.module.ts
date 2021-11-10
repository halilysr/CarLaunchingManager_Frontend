import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './components/navi/navi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendeeComponent } from './components/attendee/attendee.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { PhotofilterbycarPipe } from './pipes/photofilterbycar.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    AttendeeComponent,
    EventDetailComponent,
    CreateEventComponent,
    PhotofilterbycarPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
