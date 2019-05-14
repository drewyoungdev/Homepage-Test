import { TestBed } from '@angular/core/testing';

import { HomepageItemFourService } from './homepage-item-four.service';

describe('HomepageItemFourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageItemFourService = TestBed.get(HomepageItemFourService);
    expect(service).toBeTruthy();
  });
});
