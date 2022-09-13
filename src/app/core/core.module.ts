
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ToastrServiceProvider } from './toastr/toastr.service';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 600,
      preventDuplicates: true,
      closeButton: true,
      enableHtml: true
    })
  ],
  declarations: [],
  exports: [],
  providers: [ToastrServiceProvider]
})
export class CoreModule { }
