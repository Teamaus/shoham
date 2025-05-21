import { TestBed } from '@angular/core/testing';

import { Lvm02Service } from './lvm02.service';

describe('Lvm02Service', () => {
  let service: Lvm02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lvm02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
