import { TestBed } from '@angular/core/testing';

import { BlockchainXemService } from './blockchain-xem.service';

describe('BlockchainXemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockchainXemService = TestBed.get(BlockchainXemService);
    expect(service).toBeTruthy();
  });
});
