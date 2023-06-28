import { Component, OnInit } from '@angular/core';
import { AnnouncementserviceService } from './announcementservice.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  showFull:any=false;

  Upcomingeventdetails:any;
  contentstring: String = "lorem nhjakshfka sd fsasd asghikaghsu sdf sdfsdfsdfsfsahis ajhfua sfuha ajhsuiy asjhga ahfua sfdhauiyf ashdfahs akujhsgdu adhu"
  color:any=["steelblue","blueviolet","firebrick","teal","rose","hotpink"]
month:string[]=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


constructor(private announcds:AnnouncementserviceService){}


ngOnInit(): void {
  this.getUpcomingEvents()
}

  random():number{
    // console.log(Math.ceil(Math.random()*10));
return Math.floor((Math.random()*10)/2);


  }


  monthselector(eventmonth:string){

    return this.month[parseInt(eventmonth)-1]
  }

  getUpcomingEvents(){

    this.announcds.getAnnouncementUpcomingEvents().subscribe((data:any)=>{
      this.Upcomingeventdetails=data;
   
    })

    
    

  }


}
