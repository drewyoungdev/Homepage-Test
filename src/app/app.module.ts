import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SparkCoreAngularModule } from "@sparkdesignsystem/spark-core-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { SparkModule } from './spark.module';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
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
