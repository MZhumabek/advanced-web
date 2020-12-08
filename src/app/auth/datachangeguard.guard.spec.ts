import { TestBed } from '@angular/core/testing';

import { DatachangeguardGuard } from './datachangeguard.guard';

describe('DatachangeguardGuard', () => {
  let guard: DatachangeguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DatachangeguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
