import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

hoverOrClick:any={
  "home":true,
  "community":false,
  "events":false
};

showEvents:any;
showCommunity:any;
showHome:any;
username:any;
usermail:any;

constructor(private lout:LogoutService){}

ngOnInit(): void {
  this.username=localStorage.getItem('username')
  
}







hoverOrClickSelect(selection:any){
  
this.hoverOrClick={
  "home":false,
  "community":false,
  "events":false
}
this.hoverOrClick[selection]=true

}


logoutuser(){
 this.lout.logout()
}


}
