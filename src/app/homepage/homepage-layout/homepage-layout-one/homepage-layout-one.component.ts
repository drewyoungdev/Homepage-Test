import { Component, OnInit } from '@angular/core';
import { HomepageLayout } from '../../models/homepageLayout';
import { HomepageLayoutComponent } from '../homepage-layout.component';

@Component({
  selector: 'app-homepage-layout-one',
  templateUrl: './homepage-layout-one.component.html',
  styleUrls: ['./homepage-layout-one.component.scss']
})
export class HomepageLayoutOneComponent
  extends HomepageLayoutComponent
  implements HomepageLayout, OnInit {

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
