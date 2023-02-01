import { createReducer, on } from "@ngrx/store";
import * as coreActions from '../actions';
import { HeaderRoutes } from "../../models/header-routes";
import { Language } from "../../models/lang";

export interface State {
  currentLanguage: string;
  routes: HeaderRoutes[];
  languages: Language[];
}

export const initialState: State = {
  currentLanguage: "en",
  routes: [
    {
      path: '/directives',
      name: 'directives',
    },
    {
      path: '/pipes',
      name: 'pipes',
    },
    {
      path: '/rxjs',
      name: 'rxjs',
    },
    {
      path: '/forms',
      name: 'forms',
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
    },
  ],
  languages: [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ]
};

export const reducer = createReducer(
  initialState,
  on(coreActions.loadCurrentLanguage, (state, action) => ({
    ...state,
    currentLanguage: action.language
  })),
)
