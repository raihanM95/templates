import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientsComponent } from './all-patients.component';

describe('AllPatientsComponent', () => {
  let component: AllPatientsComponent;
  let fixture: ComponentFixture<AllPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
