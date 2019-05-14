import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageItemThreeComponent } from './homepage-item-three.component';

describe('HomepageItemThreeComponent', () => {
  let component: HomepageItemThreeComponent;
  let fixture: ComponentFixture<HomepageItemThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageItemThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageItemThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
