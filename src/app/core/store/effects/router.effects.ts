import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { CoreState } from "../reducers";
import { tap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as routerActions from "../actions";
@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<CoreState>
  ) {}

  go$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.go),
        tap(({ commands, extras }) => {
          this.router.navigate(commands, { ...extras });
        })
      ),
    { dispatch: false }
  );

  back$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  forward$ = createEffect(() =>
      this.actions$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    {dispatch: false}
  );
}
