import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpeedService } from '../speed.service';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.css']
})
export class SpeedComponent {

  _svc: SpeedService;

  /**
   *
   */
  constructor(speedSvc: SpeedService) {
    this._svc = speedSvc;

  }

  _speed: string = '';

  onSubmit(f: NgForm) {

    this._speed = this._svc.calculateSpeed(f.value.time, f.value.distance);

  }

}
