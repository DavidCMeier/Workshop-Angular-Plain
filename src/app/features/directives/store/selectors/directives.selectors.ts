import { createSelector } from "@ngrx/store";
import { getDirectivesFeatureState } from "../reducers";

export const getDirectivesState = createSelector(getDirectivesFeatureState, (state) => state.Directives)
export const getFilmsState = createSelector(getDirectivesState, (state) => state.films)
export const getFavoriteSeasonState = createSelector(getDirectivesState, (state) => state.favoriteSeason)
