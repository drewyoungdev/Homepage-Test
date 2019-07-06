import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, concat } from "rxjs/operators";

/*
Summary
Provides all HTTP calls for homepage items
*/
@Injectable({
  providedIn: 'root'
})
export class HomepageItemService {

  constructor() { }

  // main homepage item
  getOne(): Observable<boolean> {
    //return throwError(new Error());
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(500)
      );
  }

  getTwo(): Observable<boolean> {
    //return throwError(new Error());
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(1000)
      );
  }

  // main homepage item
  getThree(): Observable<boolean> {
    //return throwError(new Error());
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(1500)
      );
  }

  getFour(): Observable<boolean> {
    //return throwError(new Error());
    return of(true)
      .pipe(
        // delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
        delay(500)
      );
  }
}
