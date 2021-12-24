import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendee } from 'src/app/models/attendee';
import { DashboardItem } from 'src/app/models/dashboardItem';
import { Photo } from 'src/app/models/photo';
import { AttendeeService } from 'src/app/services/attendee.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  photos: Photo[];
  count: number = 1;
  attendees:Attendee[];
  events:DashboardItem[];
  filteredEvents:DashboardItem[];

  carName:string;
  date:string;
  countryName:string;
  destination:string

  event:DashboardItem;
  id:number;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private attendeeService:AttendeeService,
    private dashboardService:DashboardService
    
  ) {}
    
    
  /*attendees: Attendee[] = [
    {
      attendeeId: '1',
      attendeeName: 'Dogan Kabak',
      attendeeJob: 'Journalist',
      attendeeNationality: 'Turkey',
    },
    {
      attendeeId: '1',
      attendeeName: 'Dogan Kabak',
      attendeeJob: 'Journalist',
      attendeeNationality: 'Turkey',
    },
    {
      attendeeId: '2',
      attendeeName: 'Burak Ertem',
      attendeeJob: 'Journalist',
      attendeeNationality: 'Turkey',
    },
    {
      attendeeId: '3',
      attendeeName: 'Matt Watson',
      attendeeJob: 'Journalist',
      attendeeNationality: 'England',
    },
  ]*/

  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      
      this.id=params['id']
      this.getPhotosByCarId(params['id']);
      //this.filteredEvents = this.events.filter(e=>e.carId==params['id'])
      //this.event!=this.filteredEvents.pop();
      this.getEvents(params['eventId']);
      console.log(this.id)
      

    });
    this.getAttendees();

    /*this.carName = this.events[0].carName;
    this.countryName = this.events[0].countryName;
    this.date = this.events[0].date;
    this.destination =this.events[0].destinationName;
    */
    
  }

  getPhotosByCarId(carId: number) {
    this.photoService.getPhotosByCarId(carId).subscribe((response) => {
      this.photos = response.data;
    });
  }

  getAttendees(){

    this.attendeeService.getAttendes().subscribe((response)=>{
      this.attendees = response.data;
    })
  }

  getEvents(id:number){
    this.dashboardService.getEvents().subscribe((response)=>{
      this.events= response.data.filter(e=>e.eventId==id);
      //this.event!= this.events.pop()
      
    })
  }

  log(){
    console.log(this.events);
  }
}
