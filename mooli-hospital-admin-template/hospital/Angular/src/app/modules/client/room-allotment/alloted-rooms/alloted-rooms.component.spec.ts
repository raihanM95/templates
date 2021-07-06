import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotedRoomsComponent } from './alloted-rooms.component';

describe('AllotedRoomsComponent', () => {
  let component: AllotedRoomsComponent;
  let fixture: ComponentFixture<AllotedRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotedRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotedRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
