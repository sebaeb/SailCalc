import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeschickungComponent } from './beschickung.component';

describe('BeschickungComponent', () => {
  let component: BeschickungComponent;
  let fixture: ComponentFixture<BeschickungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeschickungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeschickungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
