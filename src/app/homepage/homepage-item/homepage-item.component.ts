import { Component, Output, EventEmitter, Input } from '@angular/core';
import { HomepageItemCompletedEvent, HomepageItemPosition } from '../models/homepage-item-completed-event';

/*
Summary
Base component to provide all components with inherited properties that allows the parent
Once the component extending this Base component is completed, it should call
the completed() method to notify the parent component it is complete.
*/
@Component({
  selector: 'app-homepage-item',
  templateUrl: './homepage-item.component.html',
  styleUrls: ['./homepage-item.component.scss']
})
export class HomepageItemComponent {
  // override with title of homepage item
  @Input() title: string = 'Homepage Item';

  // determines if component is a main homepage item
  @Input() isMainHomepageItem: boolean = false;

  // allow parent component to determine if they should drive any view logic from their position
  @Input() position: HomepageItemPosition;

  // tells parent component that we are done
  @Output() completedEvent = new EventEmitter<HomepageItemCompletedEvent>();

  // determines if skeleton screen should display
  isLoading: boolean = true;

  // allow parent component to determine if error has occurred
  hasError: boolean = false;

  // allow parent component to determine if they should hide item or else we assume we have error content
  hideHomepageItem: boolean = false;

  constructor() { }

  // inheriting component will call this method to let parent component know when it is finished rendering
  completed() {
    this.isLoading = false;

    this.completedEvent.emit(
      {
        isMainHomepageItem: this.isMainHomepageItem,
        hasError: this.hasError,
        title: this.title,
        hideHomepageItem: this.hideHomepageItem,
        position: this.position
      }
    );
  }
}
