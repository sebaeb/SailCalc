import { ContentObserver } from '@angular/cdk/observers';
import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { CalcBeschickungService } from '../calc-beschickung.service';
import { NgForm } from '@angular/forms';
import { BeschickungResult } from '../beschickung-result';


@Component({
  selector: 'app-bes-strom',
  templateUrl: './bes-strom.component.html',
  styleUrls: ['./bes-strom.component.css']
})
export class BesStromComponent {

  /**
   *
   */

  _bSvc: CalcBeschickungService;

  _beschickung: BeschickungResult | undefined;

  onSubmit(f: NgForm) {
    if (!f.valid) {
      return;
    }
    this._beschickung = this._bSvc.calcBeschickung(f.value.StR, f.value.StG, f.value.KuG, f.value.FdW);

  }

  /**
   *
   */
  constructor(bs: CalcBeschickungService) {
    this._bSvc = bs;
  }



}
