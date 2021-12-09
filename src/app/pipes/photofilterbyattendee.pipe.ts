import { Pipe, PipeTransform } from '@angular/core';
import { AttendeePhoto } from '../models/attendeePhoto';

@Pipe({
  name: 'photofilterbyattendee'
})
export class PhotofilterbyattendeePipe implements PipeTransform {

  transform(photos:AttendeePhoto[],id:number){
    if(!photos || !id){
      return photos;
    }

    return photos.filter(p=>p.attendeeId == id);
  }

}
