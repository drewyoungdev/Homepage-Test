import { NgModule } from '@angular/core';
import { SparkCoreAngularModule } from '@sparkdesignsystem/spark-core-angular';
import { SparkCardModule } from '@sparkdesignsystem/spark-extras-angular-card';

const modules = [
    SparkCoreAngularModule,
    SparkCardModule
]

@NgModule({
    imports: modules,
    exports: modules
})
export class SparkModule {}
