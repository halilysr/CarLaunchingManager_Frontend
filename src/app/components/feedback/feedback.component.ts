import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { DestinationService } from 'src/app/services/destination.service';
import { Car } from 'src/app/models/car';
import { Destination } from 'src/app/models/destination';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/models/feedback';
import { FeedbackDto } from 'src/app/models/feedbackDto';
import { AttendeeService } from 'src/app/services/attendee.service';
import { Attendee } from 'src/app/models/attendee';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  cars: Car[] = [];
  destinations: Destination[] = [];
  feedbacks: FeedbackDto[] = [];
  

  carName: string = '';
  attendeeName: string = '';
  constructor(
    private destinationService: DestinationService,
    private carService: CarService,
    private feedbackService: FeedbackService,
    private attendeeService: AttendeeService,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getDestinations();
    this.getFeedbacks();
  }

  getFeedbacks() {

    this.feedbackService.getFeedbackDtos().subscribe((res=>{

      this.feedbacks = res.data;
    }),(err=>{
      console.log(err);
    }))
  }


  getCars() {
    this.carService.getAll().subscribe(
      (response) => {
        this.cars = response.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDestinations() {
    this.destinationService.getAll().subscribe(
      (response) => {
        this.destinations = response.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
