import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesTypeRoutingModule } from './directives-type-routing.module';
import { StructuralDirectivesComponent } from './structural/structural-directives/structural-directives.component';
import { SwitchCaseComponent } from './structural/structural-directives/switch-case/switch-case.component';
import { FormsModule } from '@angular/forms';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';


@NgModule({
  declarations: [
    StructuralDirectivesComponent,
    SwitchCaseComponent,
    AttributeDirectivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DirectivesTypeRoutingModule
  ]
})
export class DirectivesTypeModule { }
