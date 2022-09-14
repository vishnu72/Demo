import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { FilterPipesComponent } from './filter-pipes.component';
import { SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FilterPipesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
