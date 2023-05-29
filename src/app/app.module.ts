import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './landingpage/announcements/announcements.component';
import { PostsComponent } from './landingpage/posts/posts.component';
import { ProfileComponent } from './landingpage/profile/profile.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnnouncementsComponent,
    PostsComponent,
    ProfileComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
