import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomepageItemOneService {

  constructor() { }

  get(): Observable<boolean> {
    return of(true)
      .pipe(
        delay(Math.floor(Math.random() * (10000 - 1000 + 1000)) + 1000)
      );
  }
}
