import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';

@Component({
  selector: 'app-homepage-item-two',
  templateUrl: './homepage-item-two.component.html',
  styleUrls: ['./homepage-item-two.component.scss']
})
export class HomepageItemTwoComponent extends HomepageItemComponent implements OnInit {

  constructor() {
    super();
    this.title = 'Homepage Item Two'
  }

  ngOnInit() {
    var that = this;
    setTimeout(function () {
      that.completed()
    }, Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000);
  }
}
