import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { DestinationService } from 'src/app/services/destination.service';
import { Car } from 'src/app/models/car';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  cars:Car[] = [];
  destinations:Destination[] = [];
  constructor(private destinationService: DestinationService,private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
    this.getDestinations();
  }

  getCars(){
    this.carService.getAll().subscribe((response=>{

      this.cars = response.data;
    }),(err=>{

      console.log(err)
    }))
  }

  getDestinations(){
    this.destinationService.getAll().subscribe((response=>{

      this.destinations = response.data;
    }),(err=>{

      console.log(err)
    }))
  }

}
