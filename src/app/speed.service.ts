import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeedService {

  constructor() { }


  calculateSpeed(time: number, distance: number): string {

    return (distance / (time / 60)).toFixed(1);

  }

}
