import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
import { DateCountPipe } from './date-count.pipe';

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
    UserProfileInfoComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    library.add(faFacebook, faTwitter, faInstagram)
  }
}
