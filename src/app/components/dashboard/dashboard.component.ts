import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee';
import { DashboardItem } from 'src/app/models/dashboardItem';
import { Photo } from 'src/app/models/photo';
import { DashboardService } from 'src/app/services/dashboard.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // items:DashboardItem[]=[{id:1,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  // {id:2,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  // {id:3,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  // {id:4,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"}];
  items:DashboardItem[];

  photos:Photo[]
  filteredPhotos:Photo[];

  
  constructor(private dashboardservice:DashboardService,private photoService:PhotoService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getPhotos();
  }

  getEvents(){
    this.dashboardservice.getEvents().subscribe((response)=>{
      this.items = response.data;
    })
  }

  getPhotos(){

    this.photoService.getAll().subscribe((response) => {
      this.photos = response.data;
    });

  }

  filterPhotos(carId:number){

    this.filteredPhotos  = this.photos.filter(photo=>photo.carId == carId);
    
  }

  

}
