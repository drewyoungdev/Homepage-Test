import { Component, OnInit } from '@angular/core';
import { HomepageLayoutComponent } from '../homepage-layout.component';
import { HomepageLayout } from '../../models/homepageLayout';

@Component({
  selector: 'app-homepage-layout-three',
  templateUrl: './homepage-layout-three.component.html',
  styleUrls: ['./homepage-layout-three.component.scss']
})
export class HomepageLayoutThreeComponent
  extends HomepageLayoutComponent
  implements HomepageLayout, OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
  }

}
