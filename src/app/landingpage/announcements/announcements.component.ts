import { Component } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent {
  showFull:any=false;
  contentstring: String = "lorem nhjakshfka sd fsasd asghikaghsu sdf sdfsdfsdfsfsahis ajhfua sfuha ajhsuiy asjhga ahfua sfdhauiyf ashdfahs akujhsgdu adhu"
  color:any=["steelblue","blueviolet","firebrick","teal","rose","hotpink"]




  random():number{
    console.log(Math.ceil(Math.random()*10));
return Math.floor((Math.random()*10)/2);


  }
}
