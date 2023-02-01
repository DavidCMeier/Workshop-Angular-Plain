import { createReducer, on } from "@ngrx/store";
import * as DirectivesActions from '../actions';
import { Film } from "../../models/film";

export interface State {
  films: Film[];
  favoriteSeason: string | null;
}

export const initialState: State = {
  films: [
    {
      id: '1',
      title: 'Episode I - The Phantom Menace',
      director: 'George Lucas',
      year: '1999',
      image: 'https://m.media-amazon.com/images/I/5143kqZiBiL._AC_SY450_.jpg',
      description: 'Two Jedi Knights escape a hostile blockade to find allies and come across a young jedi named Luke Skywalker.'
    },
    {
      id: '2',
      title: 'Episode II - Attack of the Clones',
      director: 'George Lucas',
      year: '2002',
      image: 'https://m.media-amazon.com/images/I/51VJFj3OpzL._AC_.jpg'
    },
    {
      id: '3',
      title: 'Episode III - Revenge of the Sith',
      director: 'George Lucas',
      year: '2005',
      image: 'https://m.media-amazon.com/images/I/71MKj4j-isL._AC_SL1200_.jpg'
    },
    {
      id: '4',
      title: 'Episode IV - A New Hope',
      director: 'George Lucas',
      year: '1977',
      image: 'https://m.media-amazon.com/images/I/71OnL9mzN4L._AC_SL1200_.jpg'
    },
    {
      id: '5',
      title: 'Episode V - The Empire Strikes Back',
      director: 'Irvin Kershner',
      year: '1980',
      image: 'https://m.media-amazon.com/images/I/71rgQlCE3WL._AC_SY741_.jpg'
    },
    {
      id: '6',
      title: 'Episode VI - Return of the Jedi',
      director: 'Richard Marquand',
      year: '1983',
      image: 'https://m.media-amazon.com/images/I/91rU0iUHjIL._AC_SY741_.jpg'
    }
  ],
  favoriteSeason: null,
};

export const reducer = createReducer(
  initialState,
  on(DirectivesActions.loadFilmsSuccess, (state, action) => ({
    ...state,
    films: action.films
  })),
  on(DirectivesActions.loadChangeSeason, (state, action) => ({
    ...state,
    favoriteSeason: action.season
  })),

)
