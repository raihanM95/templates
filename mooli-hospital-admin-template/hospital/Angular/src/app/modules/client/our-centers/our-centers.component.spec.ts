import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCentersComponent } from './our-centers.component';

describe('OurCentersComponent', () => {
  let component: OurCentersComponent;
  let fixture: ComponentFixture<OurCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
