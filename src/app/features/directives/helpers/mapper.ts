import { Film, FilmApiResponse } from "../models/film";

export class Mapper {
  public static mapFilmApiResponseToFilm(data: FilmApiResponse): Film {
    return {
      id: data.id,
      title: data.title,
      director: data.director,
      year: data.release_date,
      image: data.image,
      description: data.description
    }
  }
}
