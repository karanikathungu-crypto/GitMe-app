import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any):number {
    let today: Date = new Date();
    let created_at:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - created_at)
    const secondsEachDay = 86400;
    var dateDifferenceInSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceInSeconds/secondsEachDay;

    if(dateCounter >= 1 && value > created_at){
      return dateCounter;
    }
    else{
      return 0;
        }
    }
    

  }


