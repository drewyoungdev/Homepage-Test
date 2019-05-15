import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemService } from '../../services/homepage-item.service';

@Component({
  selector: 'app-homepage-item-four',
  templateUrl: './homepage-item-four.component.html',
  styleUrls: ['./homepage-item-four.component.scss']
})
export class HomepageItemFourComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemService: HomepageItemService) {
    super();
    this.title = 'Homepage Item Four'
  }

  ngOnInit() {
    this.homepageItemService.getFour()
      .subscribe(x => {
        this.completed();
      });
  }
}
