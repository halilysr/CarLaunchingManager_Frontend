import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Destination } from '../models/destination';
import { Country } from '../models/country';
@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  apiUrl = 'https://localhost:44366/api/Destinations/';
  constructor(private httpClient: HttpClient) {}

  getDestinationsByCountryId(countryId: number): Observable<ListResponseModel<Destination>> {
    let newPath =
      this.apiUrl + 'getdestinationbycountryid?countryId=' + countryId;
    return this.httpClient.get<ListResponseModel<Destination>>(newPath);
  }

  getAll(): Observable<ListResponseModel<Destination>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Destination>>(newPath);
  }
  getDestinationsByCountry(country: Country): Observable<ListResponseModel<Destination>> {
    let newPath =
      this.apiUrl + "getdestinationbycountry";
    return this.httpClient.post<ListResponseModel<Destination>>(newPath,country);
  }

}
