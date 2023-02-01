import { createAction, props } from "@ngrx/store";
import { Film } from "../../models/film";

export const loadFilms = createAction('[Directives Page] Load Films')
export const loadFilmsSuccess = createAction('[Directives Page] Load Films Success', props<{films: Film[]}>())
export const loadFilmError = createAction('[Directives Page] Load Films Error')
export const loadChangeSeason = createAction('[Directives Page] Load Change season', props<{season: string}>())
