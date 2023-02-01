import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { GhibliApiService } from "../services/ghibli-api.service";
import { Film } from "../../features/directives/models/film";

@Injectable({
  providedIn: 'root'
})
export class FilmResolver implements Resolve<Film | null> {
  constructor(private ghibliApiService: GhibliApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film | null> {
    const id = route.paramMap.get('id');
    return id ? this.ghibliApiService.getFilm(id).pipe(catchError(()=> of(null))) : of(null);
  }
}
