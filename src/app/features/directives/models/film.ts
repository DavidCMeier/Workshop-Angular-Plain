export interface Film {
  id: string;
  title: string;
  director: string;
  year: string;
  image: string;
  description?: string;
}

export interface FilmApiResponse {
  id: string,
  title: string,
  description: string,
  director: string,
  release_date: string,
  image: string,
}
