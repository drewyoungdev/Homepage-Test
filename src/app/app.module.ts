import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SparkCoreAngularModule } from "@sparkdesignsystem/spark-core-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SparkModule } from './spark.module';
import { HomepageItemComponent } from './homepage/homepage-item/homepage-item.component';
import { HomepageItemOneComponent } from './homepage/homepage-item/homepage-item-one/homepage-item-one.component';
import { HomepageItemTwoComponent } from './homepage/homepage-item/homepage-item-two/homepage-item-two.component';
import { HomepageItemThreeComponent } from './homepage/homepage-item/homepage-item-three/homepage-item-three.component';
import { HomepageItemFourComponent } from './homepage/homepage-item/homepage-item-four/homepage-item-four.component';
import { HomepageLayoutOneComponent } from './homepage/homepage-layout/homepage-layout-one/homepage-layout-one.component';
import { HomepageLayoutTwoComponent } from './homepage/homepage-layout/homepage-layout-two/homepage-layout-two.component';
import { HomepageLayoutThreeComponent } from './homepage/homepage-layout/homepage-layout-three/homepage-layout-three.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    // Homepage Entry Point
    HomepageComponent,

    // Homepage Layouts
    HomepageLayoutOneComponent,
    HomepageLayoutTwoComponent,
    HomepageLayoutThreeComponent,

    // Homepage Items within Layouts
    HomepageItemComponent,
    HomepageItemOneComponent,
    HomepageItemTwoComponent,
    HomepageItemThreeComponent,
    HomepageItemFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SparkModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    HomepageLayoutOneComponent,
    HomepageLayoutTwoComponent,
    HomepageLayoutThreeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
