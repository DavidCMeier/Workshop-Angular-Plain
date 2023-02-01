import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AsyncSubject,
  catchError,
  combineLatestWith,
  map,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
  tap,
  withLatestFrom
} from "rxjs";
import { GhibliApiService } from "../../../../shared/services/ghibli-api.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss']
})
export class RxjsPageComponent implements OnInit, OnDestroy {

  cold$!: Observable<any>
  hot$!: Observable<any>
  private interval!: any;

  private destroy$ = new Subject<boolean>();
  constructor(private ghibliApiService: GhibliApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cold$ = new Observable(observer => {
      observer.next('Hello');
      observer.next('World');
    }).pipe(take(1));
    const hotSubject = new Subject();
    this.hot$ = hotSubject.asObservable();

    let value = 0;
    this.interval = setInterval(() => {
      hotSubject.next(value);
      value++;
    }, 1000);

    const subject = new AsyncSubject<number>();
    subject.next(0);
    subject.subscribe(value => console.log(value));
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    subject.complete();

    const films$ = this.ghibliApiService.getFilms()
      .pipe(

        tap(peliculas => console.log(peliculas)),
        map(peliculas => peliculas.map(pelicula => pelicula.title)),
        withLatestFrom(this.cold$),
        mergeMap(([peliculas, cold]) => peliculas.map(pelicula => cold + ' ' + pelicula)),
        tap(console.log),
        switchMap(() => this.http.get('https://api.github.com/users/DavidCMeier')),
        catchError(err => {
          console.log(err);
          return of([]);
        }),
        tap(console.log),

      );
    films$.subscribe();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  buttonColdClick() {
    this.cold$.subscribe(value => console.log(value));
  }

  buttonHotClick() {
    this.hot$.pipe(takeUntil(this.destroy$)).subscribe(value => console.log(value));
  }



}
