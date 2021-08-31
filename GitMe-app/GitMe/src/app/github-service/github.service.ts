import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Username } from '../username';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

    // userRequest(){
    //   interface ApiResponse{
    //     username: string;
    //     repository: string;
    //   }
    // }
    

  public getUserprofile(searchQuery:any):Observable<any[]>{
    const CLIENT_ID = "9d6e34a20c22203f33c7";
    const CLIENT_SECRET = "f9e4a4eb82ff60e56cffc4d68c159b79ebabc3df"
    let dataURL = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any>(dataURL).pipe
    (retry(1),
    catchError(this.handleError)
   );
  }

  public getRepositories(searchQuery:any):Observable<any[]>{
    const CLIENT_ID = "9d6e34a20c22203f33c7";
    const CLIENT_SECRET = "f9e4a4eb82ff60e56cffc4d68c159b79ebabc3df"
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any>(dataURL).pipe
    (retry(1),
    catchError(this.handleError)
   );
  }


  public handleError(error:HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      errorMessage = `MESSAGE : ${error.error.message}`
    }
    else{
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
    }
    return throwError(errorMessage)
  
  //   let promise = new Promise ((resolve, reject)=>{
  //     this.http.get<ApiResponse>(environment.dataURL).toPromise().then(response =>{
  //       this.quote.quote = response.quote
  //       this.quote.author= response.author

  //       resolve(response)
  //     }, 
  //     error =>{
  //       this.username.username = "Unknown"
  //       this.quote.quote = "Never, never, never give up"
  //       this.quote.author = "Winston Churchill"

  //       reject(error)
  //     })
  //   })
  //   return promise
  // }
  
  
  
  }
  
  
  
  
  
  
  
      
}


