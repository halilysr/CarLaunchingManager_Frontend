import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

>>>>>>> 36f0c1eb19854f517fb4af4a4803845c7600fda2
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './components/navi/navi.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AttendeeComponent } from './components/attendee/attendee.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { LoginComponent } from './components/login/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PhotofilterbycarPipe } from './pipes/photofilterbycar.pipe';
import { PhotofilterbyattendeePipe } from './pipes/photofilterbyattendee.pipe';
import { FeedbackComponent } from './components/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    DashboardComponent,
    AttendeeComponent,
    EventDetailComponent,
    CreateEventComponent,
    LoginComponent,
    PhotofilterbycarPipe,
<<<<<<< HEAD
=======
    PhotofilterbyattendeePipe,
    FeedbackComponent,
    
    
>>>>>>> 36f0c1eb19854f517fb4af4a4803845c7600fda2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
<<<<<<< HEAD

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
=======
    ReactiveFormsModule,
    FormsModule
>>>>>>> 36f0c1eb19854f517fb4af4a4803845c7600fda2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
