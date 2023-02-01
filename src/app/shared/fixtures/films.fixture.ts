import { Film, FilmApiResponse } from "../../features/directives/models/film";

export const filmsResponseFixture: FilmApiResponse[] = [
  {
    id: '1',
    title: 'test',
    description: 'test description',
    director: 'test director',
    release_date: '1900',
    image: 'test image',
  },
  {
    id: '2',
    title: 'test 2',
    description: 'test 2 description',
    director: 'test 2 director',
    release_date: '1901',
    image: 'test 2 image',
  }
]

export const filmsFixture: Film[] = [
  {
    id: '1',
    title: 'test',
    description: 'test description',
    director: 'test director',
    year: '1900',
    image: 'test image',
  },
  {
    id: '2',
    title: 'test 2',
    description: 'test 2 description',
    director: 'test 2 director',
    year: '1901',
    image: 'test 2 image',
  }
]
