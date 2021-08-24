import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatGuruComponent } from './seat-guru.component';

describe('SeatGuruComponent', () => {
  let component: SeatGuruComponent;
  let fixture: ComponentFixture<SeatGuruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatGuruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatGuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
