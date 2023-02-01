import { createAction, props } from "@ngrx/store";

export const loadCurrentLanguage = createAction('[Core] Load Core', props<{language: string}>())
