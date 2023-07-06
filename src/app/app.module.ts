import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './landingpage/announcements/announcements.component';
import { PostsComponent } from './landingpage/posts/posts.component';
import { ProfileComponent } from './landingpage/profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { PostdialogComponent } from './postdialog/postdialog.component';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from "@azure/msal-angular";
import { BrowserCacheLocation, InteractionType, PublicClientApplication } from "@azure/msal-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SpinnerComponent } from './spinner/spinner.component';
const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnouncementsComponent,
    PostsComponent,
    ProfileComponent,
    LandingpageComponent,
    PostdialogComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MsalModule.forRoot(new PublicClientApplication(

      {

        auth: {

          clientId: '0bd768c2-664a-4074-aea2-a4826aec48e8',

          authority: "https://login.microsoftonline.com/7d34c27d-88fb-43fd-bbd6-17ba0da92e50/",

          redirectUri: "http://localhost:4200/",

        },

        cache: {

          cacheLocation: BrowserCacheLocation.LocalStorage,

          storeAuthStateInCookie: isIE

        },

      }

    ),

      {

        interactionType: InteractionType.Redirect,

        authRequest: {

          scopes: ['user.read'],

        }

      }, {

      interactionType: InteractionType.Redirect,

       protectedResourceMap : new Map<string, Array<string>>([['https://graph.microsoft.com/v1.0/me',['user.read']]])

    })
  ],
  providers: [
   
    {
   
         provide: HTTP_INTERCEPTORS,
   
         useClass: MsalInterceptor,
   
         multi: true,
   
       },MsalGuard
  ],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
