import { TestBed } from '@angular/core/testing';

import { HomepageItemThreeService } from './homepage-item-three.service';

describe('HomepageItemThreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomepageItemThreeService = TestBed.get(HomepageItemThreeService);
    expect(service).toBeTruthy();
  });
});
