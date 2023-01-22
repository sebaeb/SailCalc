import { TestBed } from '@angular/core/testing';

import { CalcBeschickungService } from './calc-beschickung.service';

describe('CalcBeschickungService', () => {
  let service: CalcBeschickungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcBeschickungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('beschickung should return correct value', () => {
    expect(service.beschickung(135, 4, 90, 3.1)).toBeCloseTo(66, 0);
  })

  it('beschickung should return correct FüG', () => {
    expect(service.calcBeschickung(135, 4, 90, 3.1).fuG).toBeCloseTo(4.1, 1);
  })

  it('addVector should return correct value', () => {
    expect(service.addVector({x:90, y:2.8284271247461903}, {x:90, y:-2.8284271247461903})?.x).toBe(180);
    expect(service.addVector({x:90, y:2.8284271247461903}, {x:90, y:-2.828427124746190})?.y).toBeCloseTo(0,1);
  })


  it('coordinates should return correct value 135/4 --> 2.8/-2.8', () => {
    expect(service.getCoordinates(135, 4)?.x).toBeCloseTo(2.8,1);
    expect(service.getCoordinates(135, 4)?.y).toBeCloseTo(-2.8,1);
  })

  it('coordinates should return correct value 90/4 --> 4/0', () => {
    expect(service.getCoordinates(90, 4)?.x).toBeCloseTo(4,1);
    expect(service.getCoordinates(90, 4)?.y).toBeCloseTo(0,1);
  })


});
