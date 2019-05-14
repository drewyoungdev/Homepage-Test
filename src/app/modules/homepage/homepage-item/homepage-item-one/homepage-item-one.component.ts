import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';

@Component({
  selector: 'app-homepage-item-one',
  templateUrl: './homepage-item-one.component.html',
  styleUrls: ['./homepage-item-one.component.scss']
})
export class HomepageItemOneComponent extends HomepageItemComponent implements OnInit {
  constructor() {
    super();

    this.title = 'Homepage Item One';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
