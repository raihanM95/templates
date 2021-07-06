import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvoicesComponent } from './patient-invoices.component';

describe('PatientInvoicesComponent', () => {
  let component: PatientInvoicesComponent;
  let fixture: ComponentFixture<PatientInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
