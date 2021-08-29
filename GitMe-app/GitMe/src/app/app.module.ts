import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { NavDisplayComponent } from './nav-display/nav-display.component';
import { ContactComponent } from './contact/contact.component';
import { GithubService } from './github-service/github.service';
import { RepositoryComponent } from './repository/repository.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';
import { UserProfileInfoComponent } from './user-profile-info/user-profile-info.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayFormComponent,
    NavDisplayComponent,
    ContactComponent,
    RepositoryComponent,
    UserProfileComponent,
    UserProfileCardComponent,
    UserProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
