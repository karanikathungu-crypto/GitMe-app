import { Component, OnInit } from '@angular/core';

import { DisplayFormComponent } from '../display-form/display-form.component';
import { NavDisplayComponent } from '../nav-display/nav-display.component';
import { Username } from '../username';
import { Repository } from '../repository';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  

  constructor(){

   }

  ngOnInit(): void {
  }

}
