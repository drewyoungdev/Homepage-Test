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

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
