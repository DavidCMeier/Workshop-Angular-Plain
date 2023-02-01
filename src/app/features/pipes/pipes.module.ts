import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesPageComponent } from './containers/pipes-page/pipes-page.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

const routes = [
  {
    path: '',
    component: PipesPageComponent
  }
];

@NgModule({
  declarations: [
    PipesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class PipesModule { }
