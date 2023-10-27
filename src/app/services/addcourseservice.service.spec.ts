import { TestBed } from '@angular/core/testing';

import { AddcourseserviceService } from './addcourseservice.service';

describe('AddcourseserviceService', () => {
  let service: AddcourseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddcourseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
