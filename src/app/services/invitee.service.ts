import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { Observable,throwError } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Invitee } from '../models/invitee';

@Injectable({
  providedIn: 'root'
})
export class InviteeService {

  apiUrl = 'https://localhost:44366/api/Invitees/';

  constructor(private httpClient: HttpClient) {}

  getAll():Observable<ListResponseModel<Invitee>>{
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Invitee>>(newPath);
  }
  getInviteesByEventId(eventId:number):Observable<ListResponseModel<Invitee>>{
    //https://localhost:44366/api/Invitees/getinviteesbyeventid?eventId=2
    let newPath = this.apiUrl + 'getinviteesbyeventid?eventId='+eventId;
    return this.httpClient.get<ListResponseModel<Invitee>>(newPath);
  }

  add(invitee:Invitee){

    let newPath = this.apiUrl+'add'

    return this.httpClient.post(newPath,invitee).pipe(catchError(this.handleError));
  }

  delete(invitee:Invitee){

    let newPath = this.apiUrl+'delete'

    return this.httpClient.post(newPath,invitee);
  }

  //https://localhost:44366/api/Invitees/deletebyeventandAttendeeid?eventId=1&attendeeId=1
  deleteByEventIdAndAttendeeId(eventId:number,attendeeId:number){
    let newPath = this.apiUrl + "deletebyeventandattendeeid?eventId="+eventId+"&attendeeId="+attendeeId
    return this.httpClient.post(newPath,null);
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}
}
