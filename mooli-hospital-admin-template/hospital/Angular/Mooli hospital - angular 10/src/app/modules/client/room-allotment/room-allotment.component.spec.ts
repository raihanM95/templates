import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAllotmentComponent } from './room-allotment.component';

describe('RoomAllotmentComponent', () => {
  let component: RoomAllotmentComponent;
  let fixture: ComponentFixture<RoomAllotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomAllotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
