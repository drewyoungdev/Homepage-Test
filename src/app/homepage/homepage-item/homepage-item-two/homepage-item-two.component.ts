import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemService } from '../../services/homepage-item.service';

@Component({
  selector: 'app-homepage-item-two',
  templateUrl: './homepage-item-two.component.html',
  styleUrls: ['./homepage-item-two.component.scss']
})
export class HomepageItemTwoComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemService: HomepageItemService) {
    super();
    this.title = 'Homepage Item Two'
  }

  ngOnInit() {
    this.homepageItemService.getTwo()
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
