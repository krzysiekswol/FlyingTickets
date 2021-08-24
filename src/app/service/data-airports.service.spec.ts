import { TestBed } from '@angular/core/testing';

import { DataAirportsService } from './data-airports.service';

describe('DataAirportsService', () => {
  let service: DataAirportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAirportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
