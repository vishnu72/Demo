import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipesComponent } from './filter-pipes.component';

const routes: Routes = [
  {
    path: '',
    component: FilterPipesComponent,
    data: {
      breadcrumb: "pipes"
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipesExampleRoutingModule { }
