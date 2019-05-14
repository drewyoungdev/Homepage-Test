import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemOneService } from '../../services/homepage-item-one.service';

@Component({
  selector: 'app-homepage-item-one',
  templateUrl: './homepage-item-one.component.html',
  styleUrls: ['./homepage-item-one.component.scss']
})
export class HomepageItemOneComponent extends HomepageItemComponent implements OnInit {
  constructor(private homepageItemOneService: HomepageItemOneService) {
    super();
    this.title = 'Homepage Item One';
    this.isMainHomepageItem = true;
  }

  ngOnInit() {
    this.homepageItemOneService.get()
      .subscribe(x => {
        this.completed();
      });
  }
}
