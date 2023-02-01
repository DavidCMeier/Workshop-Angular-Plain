import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromActions from '../actions';
import { switchMap } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { tap } from "rxjs";

@Injectable()
export class CoreEffects {
  constructor(private actions$: Actions, private translate: TranslateService) {}

  loadChangeLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadCurrentLanguage),
      switchMap((action) =>
        this.translate.use(action.language).pipe(tap(() => console.log('effect')))
      )
    ),
    { dispatch: false }
  );
}
