import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemThreeService } from '../../services/homepage-item-three.service';

@Component({
  selector: 'app-homepage-item-three',
  templateUrl: './homepage-item-three.component.html',
  styleUrls: ['./homepage-item-three.component.scss']
})
export class HomepageItemThreeComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemThreeService: HomepageItemThreeService) {
    super();
    this.title = 'Homepage Item Three'
    this.isMainHomepageItem = true;
  }

  ngOnInit() {
    this.homepageItemThreeService.get()
      .subscribe(x => {
        this.completed();
      });
  }
}
