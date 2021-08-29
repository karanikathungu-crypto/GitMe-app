import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  public username: any;
  public repository: any;

  constructor() { }
  public searchUsername(){}

  ngOnInit(): void {
  }

  // https://api.github.com/users/karanikathungu-crypto
  // https://api.github.com/users/karanikathungu-crypto/repos
}
