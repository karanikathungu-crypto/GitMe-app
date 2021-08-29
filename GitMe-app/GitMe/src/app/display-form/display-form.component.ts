import { Component, OnInit } from '@angular/core';
import { Username } from '../username';
import { Repository } from '../repository';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {

  public userQuery: any;
  public username: any;
  public repository: any;//any[]
  public errorMessage: any;

  constructor(private githubService:GithubService) { }
  public searchUsername(){
    this.githubService.getUserprofile(this.userQuery).subscribe(data=>{
      this.username = data;
    }, (error) => {
      this.errorMessage = error;
    }) 
  }

  ngOnInit(): void {
  }

  // https://api.github.com/users/karanikathungu-crypto
  // https://api.github.com/users/karanikathungu-crypto/repos
}
