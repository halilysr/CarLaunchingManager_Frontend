import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Car } from '../models/car';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  apiUrl = 'https://localhost:44366/api/Cars/';
  
  constructor(private httpClient: HttpClient) {}

  getAll():Observable<ListResponseModel<Car>>{

    let newPath = this.apiUrl + "getall";

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getByid(id:number):Observable<SingleResponseModel<Car>>{


    //https://localhost:44366/api/Cars/getbymodel?model=c180
    //https://localhost:44366/api/Cars/getbyid?id=1
    let newUrl = this.apiUrl + "getbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<Car>>(newUrl);
  }

  getByModel(model:string):Observable<SingleResponseModel<Car>>{


    //https://localhost:44366/api/Cars/getbymodel?model=c180
    
    let newUrl = this.apiUrl + "getbymodel?model="+model;
    return this.httpClient.get<SingleResponseModel<Car>>(newUrl);
  }

}
