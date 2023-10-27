import { TestBed } from '@angular/core/testing';

import { AddstudentserviceService } from './addstudentservice.service';

describe('AddstudentserviceService', () => {
  let service: AddstudentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddstudentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
