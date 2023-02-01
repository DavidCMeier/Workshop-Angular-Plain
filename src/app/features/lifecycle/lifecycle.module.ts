import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LifecyclePageComponent } from "./containers/lifecycle-page/lifecycle-page.component";
import { TitleComponent } from './components/title/title.component';
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: LifecyclePageComponent
  }
];

@NgModule({
  declarations: [
    LifecyclePageComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class LifecycleModule { }
