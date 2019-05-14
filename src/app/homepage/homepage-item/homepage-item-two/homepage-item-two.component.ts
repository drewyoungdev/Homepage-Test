import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemTwoService } from '../../services/homepage-item-two.service';

@Component({
  selector: 'app-homepage-item-two',
  templateUrl: './homepage-item-two.component.html',
  styleUrls: ['./homepage-item-two.component.scss']
})
export class HomepageItemTwoComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemTwoService: HomepageItemTwoService) {
    super();
    this.title = 'Homepage Item Two'
  }

  ngOnInit() {
    this.homepageItemTwoService.get()
      .subscribe(x => {
        this.completed();
      });
  }
}
