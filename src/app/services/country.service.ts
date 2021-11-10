import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root',
})
export class CountryService {
  apiUrl = 'https://localhost:44366/api/Countries/';
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ListResponseModel<Country>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Country>>(newPath);
  }

  getCountryByName(name:string): Observable<SingleResponseModel<Country>> {
    let newPath = this.apiUrl + 'getbycountryname?countryName='+name;
    
    return this.httpClient.get<SingleResponseModel<Country>>(newPath);
  }
  
}
