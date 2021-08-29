import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { NavDisplayComponent } from './nav-display/nav-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayFormComponent,
    NavDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
