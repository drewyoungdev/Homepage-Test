import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageItemFourComponent } from './homepage-item-four.component';

describe('HomepageItemFourComponent', () => {
  let component: HomepageItemFourComponent;
  let fixture: ComponentFixture<HomepageItemFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageItemFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageItemFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
