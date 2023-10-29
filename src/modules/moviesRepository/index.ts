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

export type MovieDetails = Movie & {
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  imdb_id: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
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

type MovieKeywordsResponse = {
  id: number;
  keywords: {
    id: number;
    name: string;
  }[];
};

type MovieImageProps = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
type MovieImagesResponse = {
  id: number;
  backdrops: MovieImageProps[];
  posters: MovieImageProps[];
  logos: MovieImageProps[];
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

  static async movieDetails(id: number, language: string = "en-US") {
    return await http<MovieDetails>(
      `${API_URL}/movie/${id}?language=${language}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  }

  static async movieKeywords(id: number) {
    return await http<MovieKeywordsResponse>(
      `${API_URL}/movie/${id}/keywords`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
  }

  static async movieImages(id: number | string) {
    return await http<MovieImagesResponse>(`${API_URL}/movie/${id}/images`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  }
}
