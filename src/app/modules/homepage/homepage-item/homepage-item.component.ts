import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-homepage-item',
  templateUrl: './homepage-item.component.html',
  styleUrls: ['./homepage-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageItemComponent implements OnInit {
  // override with title of homepage item
  title: string = 'Homepage Item';

  // determines if skeleton screen should display
  isLoading: boolean = true;

  // allow parent component to determine if error has occurred
  hasError: boolean;

  // tells parent component that we are done
  @Output() completedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    var that = this;
    setTimeout(function () {
      that.isLoading = false;
      that.completedEvent.emit(Math.random());
    }, Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000);
  }
}
