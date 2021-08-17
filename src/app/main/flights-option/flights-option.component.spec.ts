import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsOptionComponent } from './flights-option.component';

describe('FlightsOptionComponent', () => {
  let component: FlightsOptionComponent;
  let fixture: ComponentFixture<FlightsOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightsOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
