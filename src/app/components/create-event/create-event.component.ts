import { Component, OnInit } from '@angular/core';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DestinationService } from 'src/app/services/destination.service';
import { CountryService } from 'src/app/services/country.service';
import { Country } from 'src/app/models/country';
import { Destination } from 'src/app/models/destination';
import { Car } from 'src/app/models/car';
import { Photo } from 'src/app/models/photo';
import { CarService } from 'src/app/services/car.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;

  countries: Country[];
  currentCountry: Country;
  filteredCountries: Country[];

  filteredDestinations: Destination[];
  destinations: Destination[];

  currentCar: Car;
  cars: Car[];
  filteredCars: Car[];

  photos: Photo[];
  filteredPhotos: Photo[];

  model: NgbDateStruct;
  date: {year: number, month: number};

  myImgUrl='assets/mallorca1.jpg';

  constructor(
    private formBuilder: FormBuilder,
    private destinationService: DestinationService,
    private countryService: CountryService,
    private carService:CarService,
    private photoService:PhotoService,
    private calendar: NgbCalendar
  ) {}


  ngOnInit(): void {
    this.eventForm = this.formBuilder.group({
      carModel: '',
      country: '',
      destination: '',
      date: null,
    });

    this.getCountries();
    this.getDestinations();
    this.getPhotos();
    this.getCars();
  }

  getDestinations() {
    this.destinationService.getAll().subscribe((response) => {
      this.destinations = response.data;
    });
  }

  getCountries() {
    this.countryService.getAll().subscribe((response) => {
      this.countries = response.data;
    });
  }

  getCars(){

    this.carService.getAll().subscribe((response) => {
      this.cars = response.data;
    });

  }

  getPhotos(){

    this.photoService.getAll().subscribe((response) => {
      this.photos = response.data;
    });

  }


  getStringValue(value: any): string {
    return String(value);
  }

  save() {
    console.log(this.eventForm);
    console.log(this.date)
  }

  //on Country Change
  onChange($event: any) {
    const res = $event.target.value;

    let converted = this.getStringValue(res);

    this.filteredCountries = this.countries.filter(
      (c) => c.countryName == converted
    );

    const val = this.filteredCountries.pop();

    this.currentCountry = val!!;

    this.filteredDestinations = this.destinations.filter(
      (dest) => dest.countryId == this.currentCountry.countryId
    );

    //this.filteredDestinations=dest;
    console.log(this.filteredDestinations);
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  onCarModelChange($event:any){

    

    let converted = this.getStringValue($event.target.value);

    console.log(converted)

    this.filteredCars = this.cars.filter(c=>c.carName == converted);

    let car = this.filteredCars.pop();
    this.currentCar = car!!;
    console.log(this.filteredCars)
    console.log(this.currentCar)

    this.filteredPhotos = this.photos.filter(p=>p.carId==this.currentCar.carId);
   

    console.log(this.filteredPhotos)

    
    

  }
}
