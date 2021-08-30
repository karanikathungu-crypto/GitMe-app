import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { NavDisplayComponent } from './nav-display/nav-display.component';

const routes: Routes = [
  {path:'contacts' ,component: ContactComponent},
  {path:'home', component: DisplayFormComponent},
  {path:'navbar', component: NavDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
