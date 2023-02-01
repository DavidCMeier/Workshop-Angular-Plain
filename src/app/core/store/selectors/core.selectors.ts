import { createSelector } from "@ngrx/store";
import { getCoreFeatureState } from "../reducers";

export const getCoreState = createSelector(getCoreFeatureState, (state) => state.core)
export const getCurrentLang = createSelector(getCoreState, (state) => state.currentLanguage)
export const getRoutes = createSelector(getCoreState, (state) => state.routes)
export const getLanguages = createSelector(getCoreState, (state) => state.languages)
