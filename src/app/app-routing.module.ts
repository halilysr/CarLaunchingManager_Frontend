import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendeeComponent } from './components/attendee/attendee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [

  {path:'attendees',component:AttendeeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'create',component:CreateEventComponent},
  {path:'events/:eventId/:id',component:EventDetailComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'attendees',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
