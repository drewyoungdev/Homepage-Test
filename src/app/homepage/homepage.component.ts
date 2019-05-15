import { Component, OnInit } from '@angular/core';
import { HomepageItemCompletedEvent } from './models/homepage-item-completed-event';

/*
Summary
Depending on the requirements this component may not have any logic.
This component is here to ORCHESTRATE all of the homepage item components.
We HAVE the option to pivot off of the triggered events to manage our homepage items if we decide.
This parent component just gives us the flexibility to apply uniform handling of homepage items.
For example:
 - Show the preloader until some condition is met by all homepage items
 - Highlight homepage item with red if hasError is true
 - Have specific Failure Reason Codes to apply generic styling to homepage item
 - Remove homepage item completely if hideHomepage returned as true.
 - etc. etc.
*/
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showPreloader: boolean = true;

  // display preloader until at least "x" homepage items complete
  completedHomepageItems: number = 0;

  // determine how many items must be loaded before preloader is hidden
  requiredCompletedHomepageItems: number = 1;

  constructor() { }

  ngOnInit() {
  }

  onCompletion($event: HomepageItemCompletedEvent) {
    if ($event.isMainHomepageItem) {
      this.completedHomepageItems++;
    }

    if (this.completedHomepageItems >= this.requiredCompletedHomepageItems) {
      this.showPreloader = false;
    }
  }
}
