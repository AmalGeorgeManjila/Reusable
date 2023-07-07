import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Inject, OnDestroy, Injectable, Output, EventEmitter } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { AuthenticationResult, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { EventMessage, EventType, } from '@azure/msal-browser';
import { LogoutService } from '../logout.service';
import { PostsServiceService } from './posts/posts-service.service';
import { PostsComponent } from './posts/posts.component';
import { FeedserviceService } from './feedservice.service';
import { DataService } from '../data.service';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})




export class LandingpageComponent {
  profile: any;
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  booleanObservable: Observable<boolean>=this.lout.logout$;
 
  constructor(
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService, private http: HttpClient,
    private lout:LogoutService,
    private postservice:PostsServiceService,
    private postcomp:PostsComponent,
    private feedservice:FeedserviceService,
    private ds:DataService,
  ) { }

  ngOnInit() {

    this.subscribeToBooleanObservable()
    // this.isIframe = window !== window.parent && !window.opener;
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
        this.setLoginDisplay();
      });
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        // Do something with event payload here
      });
    this.setLoginDisplay();


    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      });
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
        // this.callApi()

      });
      this.getprofile()
  }

  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {

      if (this.msalGuardConfig.authRequest) {

        this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)

          .subscribe((response: AuthenticationResult) => {

            this.authService.instance.setActiveAccount(response.account);

          });

      } else {

        this.authService.loginPopup()

          .subscribe((response: AuthenticationResult) => {

            this.authService.instance.setActiveAccount(response.account);

          });

      }

    } else {

      if (this.msalGuardConfig.authRequest) {

        this.authService.loginRedirect({ ...this.msalGuardConfig.authRequest } as RedirectRequest);

      } else {

        this.authService.loginRedirect();

      }

    }
  }
  logout() {
    console.log("hi");
    

   
    
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/"
      });
    } else {
      this.authService.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
   
    }
  
  }


  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }


  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
 getprofile(){
  this.http.get(GRAPH_ENDPOINT).subscribe(profile=>{
    this.profile=profile
    // console.log(this.profile);
    localStorage.setItem('username',this.profile.displayName)
    localStorage.setItem('usermail',this.profile.mail)
    localStorage.setItem('firstname',this.profile.givenName)
    localStorage.setItem('lastname',this.profile.surname)
    
    // this.ds.login();
  })
  const usermail=localStorage.getItem('usermail');
  const firstname = localStorage.getItem('firstname');
  const lastname =  localStorage.getItem('lastname');
    const body={
      "firstName": firstname,
      "lastName": lastname,
      "email": usermail
    }
    // alert(usermail)
    this.http.post('http://192.168.2.6:4000/signup/',body).subscribe((data:any)=>{
      alert(data)
    })
 }







 subscribeToBooleanObservable() {
  this.booleanObservable.subscribe((value: boolean) => {
    if (value === true) {
      // Call your method when the Observable emits 'true'
      this.logout();
    }
  });
}


// scrollingfeed


scrollfeed(event:any){

  // const wind=event.targe.wheeldeltaY;
  // console.log(wind);
  

  // console.log(window.pageXOffset);
  
  // console.log(event.target.scrollHeight - event.target.clientHeight);
  // console.log(event.target.clientHeight + " clientheight");
  // console.log(event.target.scrollTop);
  // console.log(wind);

if((event.target.scrollHeight - event.target.clientHeight <event.target.scrollTop+50)){

  
  this.feedservice.nextfeed()
}
  
}


}
