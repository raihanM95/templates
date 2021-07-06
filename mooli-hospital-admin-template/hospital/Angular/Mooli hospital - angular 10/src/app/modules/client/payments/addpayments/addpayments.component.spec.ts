import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentsComponent } from './addpayments.component';

describe('AddpaymentsComponent', () => {
  let component: AddpaymentsComponent;
  let fixture: ComponentFixture<AddpaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
