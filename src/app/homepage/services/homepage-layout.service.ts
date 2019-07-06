import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { HomepageLayoutOneComponent } from '../homepage-layout/homepage-layout-one/homepage-layout-one.component';
import { HomepageLayoutItem } from '../models/homepageLayout';

/*
Summary
Provides all HTTP calls for homepage items
*/
@Injectable({
  providedIn: 'root'
})
export class HomepageLayoutService {

  constructor() { }

  // return string of name of homepage layout component to render
  // example: https://www.concretepage.com/angular-2/angular-2-4-dynamic-component-loader-example
  getHomepageLayout(): Observable<HomepageLayoutItem> {
    //return throwError(new Error());
    return of(new HomepageLayoutItem(HomepageLayoutOneComponent, 'hello world'))
        .pipe(
            // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
            delay(3000)
        );
  }
}
