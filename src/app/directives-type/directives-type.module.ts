import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesTypeRoutingModule } from './directives-type-routing.module';
import { StructuralDirectivesComponent } from './structural/structural-directives/structural-directives.component';
import { SwitchCaseComponent } from './structural/structural-directives/switch-case/switch-case.component';
import { FormsModule } from '@angular/forms';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    StructuralDirectivesComponent,
    SwitchCaseComponent,
    AttributeDirectivesComponent,
    CustomDirectiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DirectivesTypeRoutingModule
  ]
})
export class DirectivesTypeModule { }
