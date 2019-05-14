import { TestBed } from '@angular/core/testing';

import { HomepageItemOneService } from './homepage-item-one.service';

describe('HomepageItemOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageItemOneService = TestBed.get(HomepageItemOneService);
    expect(service).toBeTruthy();
  });
});
