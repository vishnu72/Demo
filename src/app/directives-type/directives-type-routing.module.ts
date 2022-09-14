import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { StructuralDirectivesComponent } from './structural/structural-directives/structural-directives.component';
import { SwitchCaseComponent } from './structural/structural-directives/switch-case/switch-case.component';

const routes: Routes = [
  {
    path: '',
    component: StructuralDirectivesComponent,
    data: {
      breadcrumb: "Directives"
    },
    children: [
      {
        path: '',
        redirectTo: 'switch-case',
        pathMatch: 'full'
      },
      {
        path: 'switch-case',
        component: SwitchCaseComponent,
        data: {
          breadcrumb: "switch-case"
        },
      },
      {
        path: 'attribute',
        component: AttributeDirectivesComponent,
        data: {
          breadcrumb: "attribute"
        },
      },
      {
        path: 'custom-directive',
        component: CustomDirectiveComponent,
        data: {
          breadcrumb: "Custom Directive"
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesTypeRoutingModule { }
