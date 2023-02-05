import { Injectable } from '@angular/core';
import { single } from 'rxjs';
import { BeschickungResult } from './beschickung-result';
import { coordinate } from './coordinate';

@Injectable({
  providedIn: 'root'
})
export class CalcBeschickungService {

  constructor() { }

  degrees_to_radians(degrees: number) {
    var pi = Math.PI;
    return degrees * (pi / 180);
  }

  radians_to_degrees(radians: number) {
    var pi = Math.PI;
    return radians * (180 / pi);
  }

  beschickung(StR: number, StG: number, KuG: number, FdW: number): number {
    let sinBS: number = (StG / FdW) * Math.sin(this.degrees_to_radians(StR - KuG));

    let bes = this.radians_to_degrees(Math.asin(sinBS));

    return bes;
  }

  calcBeschickung(StR: number, StG: number, KuG: number, FdW: number): BeschickungResult {

    let beschickung = this.beschickung(StR, StG, KuG, FdW);

    let kursWasser = KuG - beschickung;
    let stromV = this.getCoordinates(StR, StG);

    let fahrtV = this.getCoordinates(kursWasser, FdW);

    let gesamtV = this.addVector(stromV, fahrtV);

    let fahrtuGrund = this.vektorBetrag(gesamtV);

    let br: BeschickungResult = {
      bs: Math.round(beschickung), kdW: Math.round(kursWasser), stromPunkt: stromV, fuG: this.round(fahrtuGrund, 1), schnittPunkt: gesamtV
      , fdW: FdW
      , stR: StR
      , stG: StG
      , kuG: KuG
    };

    return br;

  }

  round(value: number, precision: number) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  getCoordinates(angle: number, length: number): coordinate {

    let x = length * Math.sin(this.degrees_to_radians(angle));
    let y = length * Math.cos(this.degrees_to_radians(angle));

    return { x: x, y: y };

  }

  addVector(v1: coordinate, v2: coordinate): coordinate {

    let xVal = v1.x + v2.x;
    let yVal = v1.y + v2.y;

    return { x: xVal, y: yVal }
  }

  vektorBetrag(v1: coordinate) {
    return Math.sqrt((Math.pow(v1.x, 2)) + (Math.pow(v1.y, 2)))
  }

}
