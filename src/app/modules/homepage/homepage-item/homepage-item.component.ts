import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { HomepageItemCompletedEvent } from '../models/homepage-item-completed-event';

@Component({
  selector: 'app-homepage-item',
  templateUrl: './homepage-item.component.html',
  styleUrls: ['./homepage-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageItemComponent {
  // override with title of homepage item
  title: string = 'Homepage Item';

  // determines if component is a main homepage item
  isMainHomepageItem: boolean = false;

  // determines if skeleton screen should display
  isLoading: boolean = true;

  // allow parent component to determine if error has occurred
  hasError: boolean = false;

  // allow parent component to determine if they should hide item or else we assume we have error content
  hideHomepageItem: boolean = false;

  // tells parent component that we are done
  @Output() completedEvent = new EventEmitter<HomepageItemCompletedEvent>();

  constructor() { }

  // inheriting component will call this method to let parent component know when it is finished rendering
  completed() {
    this.isLoading = false;

    this.completedEvent.emit(
      {
        isMainHomepageItem: this.isMainHomepageItem,
        hasError: this.hasError,
        title: this.title,
        hideHomepageItem: this.hideHomepageItem
      }
    );
  }
}
