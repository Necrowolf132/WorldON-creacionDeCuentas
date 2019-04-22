import { TestBed } from '@angular/core/testing';

import { Tuberia1Service } from './tuberia1.service';

describe('Tuberia1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Tuberia1Service = TestBed.get(Tuberia1Service);
    expect(service).toBeTruthy();
  });
});
