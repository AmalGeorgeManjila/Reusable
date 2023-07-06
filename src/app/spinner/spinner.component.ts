import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit{

is_loading:boolean=false;

booleanObservable: Observable<boolean>=this.lout.isloading$;

constructor(private lout:LogoutService){}


ngOnInit(): void {
  this.subscribeToBooleanObservable()
}


subscribeToBooleanObservable() {
  this.booleanObservable.subscribe((data: boolean) => {
     
      // Call your method when the Observable emits 'true'
      
    this.is_loading=data;
  });
}


}
