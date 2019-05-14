import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageItemTwoComponent } from './homepage-item-two.component';

describe('HomepageItemTwoComponent', () => {
  let component: HomepageItemTwoComponent;
  let fixture: ComponentFixture<HomepageItemTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageItemTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageItemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
