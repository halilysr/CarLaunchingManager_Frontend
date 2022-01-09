import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendee } from 'src/app/models/attendee';
import { DashboardItem } from 'src/app/models/dashboardItem';
import { Invitee } from 'src/app/models/invitee';
import { Photo } from 'src/app/models/photo';
import { AttendeeService } from 'src/app/services/attendee.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { InviteeService } from 'src/app/services/invitee.service';
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
  invitees:Invitee[]=[];
  eventAttendees:Attendee[] = [];

  carName:string;
  date:string;
  countryName:string;
  destination:string

  event:DashboardItem;
  id:number;
  eventId:number;

  currentAttendee:Attendee;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService,
    private attendeeService:AttendeeService,
    private dashboardService:DashboardService,
    private inviteeService:InviteeService
    
  ) {}
    
    


  ngOnInit(): void {
    
    this.route.params.subscribe((params) => {
      
      this.id=params['id']
      this.eventId=params['eventId']
      this.getPhotosByCarId(params['id']);
      
      //this.filteredEvents = this.events.filter(e=>e.carId==params['id'])
      //this.event!=this.filteredEvents.pop();
      this.getEvents(params['eventId']);
      console.log(this.id)
      this.getAllInvitees(params['eventId']);  

    });
    this.getAttendees();
    


    
  }

  getPhotosByCarId(carId: number) {
    this.photoService.getPhotosByCarId(carId).subscribe((response) => {
      this.photos = response.data;
    });
  }

  getAttendees(){

    this.attendeeService.getAttendes().subscribe((response)=>{
      this.attendees = response.data;
    },(err=>{
      console.log(err)
    }))
  }

  getEvents(id:number){
    this.dashboardService.getEvents().subscribe((response)=>{
      this.events= response.data.filter(e=>e.eventId==id);
    
      
    })
  }

  getAllInvitees(eventId:number){

    console.log("Get All Invitees foreach")
    this.eventAttendees=[];
    console.log("Empty Array")
    
    let id =0;
    this.inviteeService.getInviteesByEventId(eventId).subscribe((response)=>{
      this.invitees = response.data;
      
    },(err=>{
        console.log(err);
    }),(()=>{
          this.invitees.forEach((x=>{
            this.attendeeService.getByid(x.attendeeId!).subscribe(res=>{

              console.log(res.data)
              this.eventAttendees.push(res.data);

            })
          }))
    }))
  }


  getByAttendeeId(id:number){
    this.attendeeService.getByid(id).subscribe((res=>{
      this.currentAttendee=res.data;
      console.log("gett")
      

    }),(err=>{
      console.error(err)
    }),(()=>{

      console.log(this.currentAttendee);
      
    }))
  }
  log(){
    console.log(this.events);
  }

  deleteByEventIdAndAttendeeId(eventId:number,attendeeId:number){

    this.inviteeService.deleteByEventIdAndAttendeeId(eventId,attendeeId).subscribe((res=>{
      console.log(res)
    }),((error=>{
      console.error(error)
    })),(()=>{

    }))
  }

  onAdd(attendee:Attendee){
    
    let invitee:Invitee = {inviteeId:undefined,attendeeId:attendee.attendeeId,eventId:Number(this.eventId)}
    console.log(invitee)
    
    this.inviteeService.add(invitee).subscribe((response=>{

    }),(err=>{
      console.log(err);
    }),(()=>{

      this.eventAttendees.push(attendee);
    }))

    //this.getByAttendeeId(attendee.attendeeId);

    
  }

  onDelete(attendee:Attendee){

    console.log("on Delete deletedEntity")
    console.log(attendee)  
    this.deleteByEventIdAndAttendeeId(Number(this.eventId),Number(attendee.attendeeId));
      
  }
}
