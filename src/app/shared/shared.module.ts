import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeTextDirective } from './directives/size-text.directive';
import { DelayDirective } from './directives/delay.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TranslateModule } from "@ngx-translate/core";
import { TestComponent } from './components/test/test.component';



@NgModule({
  declarations: [
    SizeTextDirective,
    DelayDirective,
    CapitalizePipe,
    TestComponent,
  ],
  exports: [
    SizeTextDirective,
    DelayDirective,
    CapitalizePipe,
    TranslateModule
  ],
  imports: [
    CommonModule
  ],

})
export class SharedModule { }
