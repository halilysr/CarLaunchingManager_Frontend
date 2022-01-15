import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeeComponent } from './components/attendee/attendee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { LoginComponent } from './components/login/login/login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path:'attendees',component:AttendeeComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'create',component:CreateEventComponent,canActivate:[AuthGuard]},
  {path:'feedback',component:FeedbackComponent,canActivate:[AuthGuard]},
  {path:'events/:eventId/:id',component:EventDetailComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
