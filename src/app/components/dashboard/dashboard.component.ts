import { Component, OnInit } from '@angular/core';
import { Attendee } from 'src/app/models/attendee';
import { DashboardItem } from 'src/app/models/dashboardItem';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items:DashboardItem[]=[{id:1,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  {id:2,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  {id:3,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"},
  {id:4,carName:"C180",date:"20.10.22",destination:"Mallorca",attendeesCount:"124"}];

  constructor() { }

  ngOnInit(): void {
  }

}
