import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

hoverOrClick:any={
  "home":true,
  "community":false,
  "events":false
};

showEvents:any;
showCommunity:any;
showHome:any;









hoverOrClickSelect(selection:any){
  
this.hoverOrClick={
  "home":false,
  "community":false,
  "events":false
}
this.hoverOrClick[selection]=true

}



}
