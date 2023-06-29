import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementserviceService {

  constructor(private http:HttpClient) { }

    // UPCOMING EVENTS ANOOUNCEMENTS


    getAnnouncementUpcomingEvents(){

       return this.http.get('http://192.168.2.6:4000/upcoming')
    }


    getAnnouncementsData(){

      return this.http.get('http://192.168.2.6:4000/Announcement')
    }

}
