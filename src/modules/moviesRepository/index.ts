import { http } from "@libs/http";

const API_URL = process.env.MOVIES_API ?? "";
const API_KEY = process.env.MOVIES_API_KEY ?? "";

export type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type InTheatresResponse = MovieResponse & {
  dates: {
    maximum: string;
    minimum: string;
  };
};

export class MovieRepository {
  static async mostPopularList(page: number = 1, language: string = "pt-BR") {
    return await http<MovieResponse>(
      `${API_URL}/movie/popular?language=${language}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  }

  static async inTheatresList(page: number = 1, language: string = "pt") {
    return await http<InTheatresResponse>(
      `${API_URL}/movie/now_playing?page=${page}&language=${language}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  }

  static async getMovie(id: number, language: string = "en-US") {
    return await http<Movie>(`${API_URL}/movie/${id}?language=${language}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  }
}
