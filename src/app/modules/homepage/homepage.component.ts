import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // show loading spinner until at least "x" subjects emits observable
    // at that moment you know child components listening to same subjects have read in fresh observable
    // if any remaining components still are loading, show skeleton page
    // this means each component will need a corresponding skeleton page in case it gets loaded in last
  }

}
