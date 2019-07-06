import { Component, OnInit } from '@angular/core';
import { HomepageItemCompletedEvent } from '../models/homepage-item-completed-event';

@Component({
  selector: 'app-homepage-layout',
  templateUrl: './homepage-layout.component.html',
  styleUrls: ['./homepage-layout.component.scss']
})
export class HomepageLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCompletion($event: HomepageItemCompletedEvent) {
    console.log($event);
  }
}
