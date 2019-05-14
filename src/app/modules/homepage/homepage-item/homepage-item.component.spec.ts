import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageItemComponent } from './homepage-item.component';

describe('HomepageItemComponent', () => {
  let component: HomepageItemComponent;
  let fixture: ComponentFixture<HomepageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
