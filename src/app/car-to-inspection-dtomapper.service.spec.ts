import { TestBed } from '@angular/core/testing';

import { CarToInspectionDTOMapperService } from './car-to-inspection-dtomapper.service';

describe('CarToInspectionDTOMapperService', () => {
  let service: CarToInspectionDTOMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarToInspectionDTOMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
