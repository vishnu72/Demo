/**
 * @author Pritam Kushwaha
 * @since 4/10/2018, 5:39:45 PM
 * @class AppRoutingModule
 * This is the root routing module through which the application wide routing is configured. This module provides configuration
 * for all the lazy loaded routes. Note that RouterModule's forRoot() is configured only in this root routing module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
// --------------------------------------- //

// Configuration of application wide lazy & eagerly loaded routes.
const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'directives', pathMatch: 'full'
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives-type/directives-type.module').then(m => m.DirectivesTypeModule),
    data: {
      // title: 'Employee',
      breadcrumbs: 'directives'
    }
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes-example/pipes-example.module').then(m => m.PipesExampleModule),
    data: {
      // title: 'Employee',
      breadcrumbs: 'pipes'
    }
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
