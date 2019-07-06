import { Component, OnInit } from '@angular/core';
import { HomepageLayoutComponent } from '../homepage-layout.component';
import { HomepageLayout } from '../../models/homepageLayout';

@Component({
  selector: 'app-homepage-layout-two',
  templateUrl: './homepage-layout-two.component.html',
  styleUrls: ['./homepage-layout-two.component.scss']
})
export class HomepageLayoutTwoComponent
  extends HomepageLayoutComponent
  implements HomepageLayout, OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
