import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeEmailDetailsComponent } from './compose-email-details.component';

describe('ComposeEmailDetailsComponent', () => {
  let component: ComposeEmailDetailsComponent;
  let fixture: ComponentFixture<ComposeEmailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeEmailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeEmailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
