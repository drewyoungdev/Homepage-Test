import { TestBed } from '@angular/core/testing';

import { HomepageItemTwoService } from './homepage-item-two.service';

describe('HomepageItemTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageItemTwoService = TestBed.get(HomepageItemTwoService);
    expect(service).toBeTruthy();
  });
});
