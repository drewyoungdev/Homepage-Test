import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { HomepageLayoutOneComponent } from '../homepage-layout/homepage-layout-one/homepage-layout-one.component';
import { HomepageLayoutItem } from '../models/homepageLayout';
import { HomepageLayoutTwoComponent } from '../homepage-layout/homepage-layout-two/homepage-layout-two.component';
import { HomepageLayoutThreeComponent } from '../homepage-layout/homepage-layout-three/homepage-layout-three.component';

/*
Summary
Provides logic to determine which homepage layout to load
*/
@Injectable({
  providedIn: 'root'
})
export class HomepageLayoutService {

  constructor() { }

  // return string of name of homepage layout component to render
  // example: https://www.concretepage.com/angular-2/angular-2-4-dynamic-component-loader-example
  getHomepageLayout(homepageLayoutId: number): Observable<HomepageLayoutItem> {
    if (homepageLayoutId == 1) {
        return of(new HomepageLayoutItem(HomepageLayoutOneComponent, 'hello world'))
            .pipe(
                delay(1000)
            );
    } else if (homepageLayoutId == 2) {
        return of(new HomepageLayoutItem(HomepageLayoutTwoComponent, 'hello world'))
        .pipe(
            delay(1000)
        );
    } else if (homepageLayoutId == 3) {
      return of(new HomepageLayoutItem(HomepageLayoutThreeComponent, 'hello world'))
      .pipe(
          delay(1000)
      );
    }
  }
}
