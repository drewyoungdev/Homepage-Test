import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemService } from '../../services/homepage-item.service';

@Component({
  selector: 'app-homepage-item-one',
  templateUrl: './homepage-item-one.component.html',
  styleUrls: ['./homepage-item-one.component.scss']
})
export class HomepageItemOneComponent extends HomepageItemComponent implements OnInit {
  constructor(private homepageItemService: HomepageItemService) {
    super();
    this.title = 'Homepage Item One';
    this.isMainHomepageItem = true;
    this.position = {
      columnNumber: 1,
      rowNumber: 1
    }
  }

  ngOnInit() {
    this.homepageItemService.getOne()
    .subscribe(
      data => {
        this.completed();
      },
      err => {
        this.hasError = true;
        this.completed();
      }
    );
  }
}
