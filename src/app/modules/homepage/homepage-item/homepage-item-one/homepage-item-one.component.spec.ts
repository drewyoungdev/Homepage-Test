import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageItemOneComponent } from './homepage-item-one.component';

describe('HomepageItemOneComponent', () => {
  let component: HomepageItemOneComponent;
  let fixture: ComponentFixture<HomepageItemOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageItemOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageItemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
