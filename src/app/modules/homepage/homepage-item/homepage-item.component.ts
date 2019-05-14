import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage-item',
  templateUrl: './homepage-item.component.html',
  styleUrls: ['./homepage-item.component.scss']
})
export class HomepageItemComponent implements OnInit {
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
    }, Math.floor(Math.random() * (5000 - 1000 + 1000)) + 1000);
  }
}
