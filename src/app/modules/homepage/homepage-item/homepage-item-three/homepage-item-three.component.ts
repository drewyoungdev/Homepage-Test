import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';

@Component({
  selector: 'app-homepage-item-three',
  templateUrl: './homepage-item-three.component.html',
  styleUrls: ['./homepage-item-three.component.scss']
})
export class HomepageItemThreeComponent extends HomepageItemComponent implements OnInit {

  constructor() {
    super();
    this.title = 'Homepage Item Three'
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
