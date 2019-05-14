import { Component, OnInit } from '@angular/core';
import { HomepageItemComponent } from '../homepage-item.component';
import { HomepageItemFourService } from '../../services/homepage-item-four.service';

@Component({
  selector: 'app-homepage-item-four',
  templateUrl: './homepage-item-four.component.html',
  styleUrls: ['./homepage-item-four.component.scss']
})
export class HomepageItemFourComponent extends HomepageItemComponent implements OnInit {

  constructor(private homepageItemFourService: HomepageItemFourService) {
    super();
    this.title = 'Homepage Item Four'
  }

  ngOnInit() {
    this.homepageItemFourService.get()
      .subscribe(x => {
        this.completed();
      });
  }
}
