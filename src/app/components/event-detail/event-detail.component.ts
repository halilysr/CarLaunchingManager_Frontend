import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendee } from 'src/app/models/attendee';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,private router :Router) { }
  count:number=1;
  attendees:Attendee[]=[{attendeeId:"1",attendeeName:"Dogan Kabak",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"1",attendeeName:"Dogan Kabak",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"2",attendeeName:"Burak Ertem",attendeeJob:"Journalist",attendeeNationality:"Turkey"},
  {attendeeId:"3",attendeeName:"Matt Watson",attendeeJob:"Journalist",attendeeNationality:"England"}];

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

  }
  


}
