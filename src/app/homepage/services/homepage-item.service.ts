import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomepageItemService {

  constructor() { }

  // main homepage item
  getOne(): Observable<boolean> {
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(1000)
      );
  }

  getTwo(): Observable<boolean> {
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(3000)
      );
  }

  // main homepage item
  getThree(): Observable<boolean> {
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(2000)
      );
  }

  getFour(): Observable<boolean> {
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(6000)
      );
  }
}