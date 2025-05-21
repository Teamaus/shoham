import { TestBed } from '@angular/core/testing';

import { Lvm01Service } from './lvm01.service';

describe('Lvm01Service', () => {
  let service: Lvm01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lvm01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
