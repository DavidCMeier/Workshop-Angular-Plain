import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromCore from './core.reducer';
import * as fromRouter from './router.reducer';

export interface CoreState {
  core: fromCore.State,
  router: fromRouter.State
}

export const reducers: ActionReducerMap<CoreState> = {
  core: fromCore.reducer,
  router: fromRouter.reducer
}

export const getCoreFeatureState = createFeatureSelector<CoreState>('core');
