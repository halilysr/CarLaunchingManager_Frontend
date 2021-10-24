import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {

  attendees:Attendee[]=[{attendeeId:"1",attendeeName:"Dogan Kabak",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"1",attendeeName:"Dogan Kabak",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"2",attendeeName:"Burak Ertem",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"3",attendeeName:"Matt Watson",attendeeJob:"Journalist",attendeeNationality:"England"}];

  constructor() { }

  ngOnInit() {
  }

}
