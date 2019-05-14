import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showPreloader: boolean = true;

  // display preloader until at least "x" homepage items complete
  completedHomepageItems: number = 0;
  requiredCompletedHomepageItems: number = 3;

  constructor() { }

  ngOnInit() {
    // if any remaining components still are loading, show skeleton page
    // this means each component will need a corresponding skeleton page in case it gets loaded in last
    
    // if no items loaded all errored out, then display error page/banner
  }

  onCompletion($event) {
    console.log($event);

    this.completedHomepageItems++;

    if (this.completedHomepageItems > this.requiredCompletedHomepageItems) {
      console.log('done');
      this.showPreloader = false;
    }
  }
}
