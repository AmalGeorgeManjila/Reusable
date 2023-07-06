import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }


  logout$=new Subject<any>;

  isloading$=new Subject<any>;


  logout(){

    this.logout$.next(true)
  }

  isloading(){
    this.isloading$.next(true)
  }
  
  notloading(){
    this.isloading$.next(false)
  }

  
}
