import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromStore from './store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './containers/directives-page/directives-page.component';
import { RouterModule } from "@angular/router";
import { CardFilmComponent } from './components/card-film/card-film.component';
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { TranslateModule } from "@ngx-translate/core";
import { DetailFilmComponent } from './containers/detail-film/detail-film.component';
import { FilmResolver } from "../../shared/resolvers/film-resolver.resolver";

const routes = [
  {
    path: '',
    component: DirectivesPageComponent,
  }, {
    path: ':id',
    component: DetailFilmComponent,
    resolve: {
      film: FilmResolver
    }
  }
];

@NgModule({
  declarations: [
    DirectivesPageComponent,
    CardFilmComponent,
    DetailFilmComponent
  ],
  imports: [
    StoreModule.forFeature('directives', fromStore.reducers),
    EffectsModule.forFeature(fromStore.effects),
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild(),
    MatCardModule,
    MatRadioModule,
    FormsModule,
    SharedModule
  ]
})
export class DirectivesModule {
}
