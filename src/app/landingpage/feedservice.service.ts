import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedserviceService {

  constructor() { }

  nextfeedset$=new Subject<any>;

  nextfeed(){
    this.nextfeedset$.next(true);
    // alert("shit");
    
  }
  
}
