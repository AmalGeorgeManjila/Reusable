import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LogoutService } from './logout.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private lout:LogoutService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.lout.isloading()

    

      return next.handle(request).pipe(

        finalize(() => {
          this.lout.notloading();
        })
        
        );
    
  }
}
