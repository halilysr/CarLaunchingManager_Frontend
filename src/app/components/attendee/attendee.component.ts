import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee';
import { AttendeeService } from 'src/app/services/attendee.service';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {

  attendees:Attendee[]=[];

  constructor(private attendeeService:AttendeeService) { }

  ngOnInit() {
    this.getAttendees();
  }

  getAttendees(){

    this.attendeeService.getAttendes().subscribe((response)=>{
      this.attendees = response.data;
    })
  }
}
