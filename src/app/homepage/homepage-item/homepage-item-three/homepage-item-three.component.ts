import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemService } from '../../services/homepage-item.service';

@Component({
  selector: 'app-homepage-item-three',
  templateUrl: './homepage-item-three.component.html',
  styleUrls: ['./homepage-item-three.component.scss']
})
export class HomepageItemThreeComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemService: HomepageItemService) {
    super();
    this.title = 'Homepage Item Three'
    this.isMainHomepageItem = true;
  }

  ngOnInit() {
    this.homepageItemService.getThree()
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
