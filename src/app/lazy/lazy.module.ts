import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    LazyRoutingModule,
    NativeScriptCommonModule
  ],
  declarations: [AboutComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LazyModule { }
