import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromDirectives from './directives.reducer';

export interface DirectivesState {
    Directives: fromDirectives.State,
}

export const reducers: ActionReducerMap<DirectivesState> = {
    Directives: fromDirectives.reducer,
}

export const getDirectivesFeatureState = createFeatureSelector<DirectivesState>('directives');
