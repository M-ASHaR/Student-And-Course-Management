import { TestBed } from '@angular/core/testing';

import { UpdatestudentService } from './updatestudent.service';

describe('UpdatestudentService', () => {
  let service: UpdatestudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatestudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
