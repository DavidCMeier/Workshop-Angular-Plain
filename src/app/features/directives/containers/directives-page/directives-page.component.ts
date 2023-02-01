import {Component, OnInit} from '@angular/core';
import {Film} from "../../models/film";
import {Observable} from "rxjs";
import * as fromStore from '../../store';
import {Store} from "@ngrx/store";
import * as fromCoreStore from '../../../../core/store';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss']
})
export class DirectivesPageComponent implements OnInit {


  films$: Observable<Film[]> = this.store$.select(fromStore.getFilmsState);
  favoriteSeason$: Observable<string | null> = this.store$.select(fromStore.getFavoriteSeasonState);

  constructor(private store$: Store<fromStore.DirectivesState>) { }

  ngOnInit(): void {
    this.store$.dispatch(fromStore.loadFilms());
  }

  trackByFilm(index: number, film: Film): string {
    return film.id;
  }

  onClickFilm(id: string): void {
    this.store$.dispatch(fromCoreStore.go({commands: ['/directives', id]}));
  }

  changeSeason(favorite: any) {
    this.store$.dispatch(fromStore.loadChangeSeason({season: favorite}));
  }
}
