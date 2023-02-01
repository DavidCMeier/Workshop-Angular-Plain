import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromActions from '../actions';
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { GhibliApiService } from "../../../../shared/services/ghibli-api.service";

@Injectable()
export class DirectivesEffects {
  constructor(private actions$: Actions, private ghibliService: GhibliApiService) {}

  loadFilms$ = createEffect(() =>
   this.actions$.pipe(
     ofType(fromActions.loadFilms),
     switchMap(() =>
       this.ghibliService.getFilms().pipe(
         map((films) =>
           fromActions.loadFilmsSuccess({films})
         ),
         catchError(() => of(fromActions.loadFilmError()))
       )
     )
   )
  );
}
