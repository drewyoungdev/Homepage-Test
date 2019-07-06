import { Type } from '@angular/core';

export class HomepageLayoutItem {
  constructor(public component: Type<HomepageLayout>, public data: any) { }
}

export interface HomepageLayout {
}
