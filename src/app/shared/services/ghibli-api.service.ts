import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Film, FilmApiResponse } from "../../features/directives/models/film";
import { Mapper } from "../../features/directives/helpers/mapper";
import { AppSettingsService } from "./app-settings.service";

@Injectable({
  providedIn: 'root'
})
export class GhibliApiService {

  baseUrl = '';
  constructor(private http: HttpClient, appSettingsService: AppSettingsService) {
    this.baseUrl = appSettingsService.appSettings.apiUrl;
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<FilmApiResponse[]>(this.baseUrl + '/films').pipe(map((res: FilmApiResponse[]) => res.map(Mapper.mapFilmApiResponseToFilm)));
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get<FilmApiResponse>(this.baseUrl + '/films/' + id).pipe(map(Mapper.mapFilmApiResponseToFilm));
  }
}
