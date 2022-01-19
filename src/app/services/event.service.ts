import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardItem } from '../models/dashboardItem';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl:string ="https://localhost:44366/api/Events/"
  
  constructor(private httpClient:HttpClient){}
  


  getAll():Observable<ListResponseModel<Event>>
  {
    let newUrl = this.apiUrl + "getall";
      return this.httpClient.get<ListResponseModel<Event>>(newUrl);
  }

  getByid(id:number):Observable<SingleResponseModel<Event>>{


    //https://localhost:44366/api/Events/getbyeventid?id=1
    let newUrl = this.apiUrl + "getbyeventid?id="+id;
    return this.httpClient.get<SingleResponseModel<Event>>(newUrl);
  }
}
