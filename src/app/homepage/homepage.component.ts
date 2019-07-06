import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { HomepageItemCompletedEvent } from './models/homepage-item-completed-event';
import { HomepageLayoutService } from './services/homepage-layout.service';
import { map, finalize, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

/*
Summary
Homepage layout component will be determined by homepage layout service.
Once determined, it will load the corresponding component via the ComponentFactoryResolver
The Factory will then be injected into the container tagged via the @ViewChild
*/
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showPreloader: boolean = true;

  // container to render homepage layout within
  @ViewChild('homepageContainer', { read: ViewContainerRef }) container;

  constructor(private homepageLayoutService: HomepageLayoutService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.homepageLayoutService.getHomepageLayout()
      .pipe(
        map(homepageLayout => {
          const factory = this.resolver.resolveComponentFactory(homepageLayout.component);
          this.container.createComponent(factory);
        }),
        catchError(err => {
          console.log(err);
          return throwError(err);
        }),
        finalize(() => {
          this.showPreloader = false;
        })
      )
      .subscribe();
  }
}
