import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee';
import { AttendeePhoto } from 'src/app/models/attendeePhoto';
import { AttendeePhotoService } from 'src/app/services/attendee-photo.service';
import { AttendeeService } from 'src/app/services/attendee.service';

@Component({
  selector: 'app-attendee',
  templateUrl: './attendee.component.html',
  styleUrls: ['./attendee.component.css']
})
export class AttendeeComponent implements OnInit {

  attendees:Attendee[]=[];
  photos:AttendeePhoto[]=[];
  currentAttendee:Attendee;
  constructor(private attendeeService:AttendeeService,private photoService:AttendeePhotoService) { }

  ngOnInit() {
    this.getAttendees();
    this.getPhotos();
  }

  getAttendees(){

    this.attendeeService.getAttendes().subscribe((response)=>{
      this.attendees = response.data;
    },(error=>{
      console.error(error);
    }))
  }

  getPhotos(){
    this.photoService.getAll().subscribe((response)=>{
      this.photos = response.data;
      console.log(response.data)
    })
  }


}
