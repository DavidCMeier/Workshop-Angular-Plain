import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsPageComponent } from './containers/forms-page/forms-page.component';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { TranslateModule } from "@ngx-translate/core";

const routes = [
  {
    path: '',
    component: FormsPageComponent
  }
];

@NgModule({
  declarations: [
    FormsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,

  ]
})
export class FormsModule { }
