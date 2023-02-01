import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPageComponent } from './containers/rxjs-page/rxjs-page.component';
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";

const routes = [
  {
    path: '',
    component: RxjsPageComponent
  }
];

@NgModule({
  declarations: [
    RxjsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    TranslateModule.forChild()

  ]
})
export class RxjsModule { }
