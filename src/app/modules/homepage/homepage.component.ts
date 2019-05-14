import { Component, OnInit } from '@angular/core';
import { HomepageItemCompletedEvent } from './models/homepage-item-completed-event';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showPreloader: boolean = true;

  // display preloader until at least "x" homepage items complete
  completedHomepageItems: number = 0;

  // may need a requiredHomepageItemsLeft and requiredHomepageItemsRight
  requiredCompletedHomepageItems: number = 1;

  constructor() { }

  ngOnInit() {
    // if no items loaded all errored out, then display error page/banner
  }

  onCompletion($event: HomepageItemCompletedEvent) {
    console.log($event);

    if ($event.isMainHomepageItem) {
      this.completedHomepageItems++;
    }

    if (this.completedHomepageItems >= this.requiredCompletedHomepageItems) {
      this.showPreloader = false;
    }
  }
}
