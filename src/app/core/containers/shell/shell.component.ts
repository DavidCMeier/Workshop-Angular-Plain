import { Component, OnInit } from '@angular/core';
import { HeaderRoutes } from "../../models/header-routes";
import { TranslateService } from "@ngx-translate/core";
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';
import { withLatestFrom } from "rxjs";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  title = 'Formación Angular';
  company = 'Plain Concepts';
  routes$ = this.store$.select(fromStore.getRoutes);
  languages$ = this.store$.select(fromStore.getLanguages);
  currentLang$ = this.store$.select(fromStore.getCurrentLang)
  routesTranslated: HeaderRoutes[]=[];

  user = {
    name: 'david',
  }

  constructor(private translate: TranslateService, private store$: Store<fromStore.CoreState>) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.user= {name: 'David Calvo'};
    }, 3000)

    this.translate.stream('header.menu').pipe(withLatestFrom(this.routes$)).subscribe(([translates, routes]) => {
      this.routesTranslated = routes.map(route => {
        return {
          ...route,
          name: translates[route.name]
        }
      });
    });
  }

  changeLanguage(lang: string) {
    this.store$.dispatch(fromStore.loadCurrentLanguage({ language: lang }));
  }

}
