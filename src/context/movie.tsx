const baseURL = "https://api.themoviedb.org/3";

export function getMoviesTVShows(movie: string): Promise<MovieTVShow[]> {
  return fetch(
    `${baseURL}/discover/${movie}?sort_by=popularity.desc&api_key=ccb56df6317a72e3939ac7c5bf8082f8`
  )
    .then((res) => res.json())
    .then((response) => tvShowsData(response.results))
    .catch((err) => {
      console.log(err);
      return [];
    });
}

const getImagePath = (path: string) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

function movieData(res: any[]): MovieTVShow[] {
  return res.map((movie): any => {
    const {
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
    } = movie;
    return {
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
    };
  });
}

function tvShowsData(res: any[]): MovieTVShow[] {
  return res.map((movie): any => {
    const {
      id,
      original_name,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
    } = movie;
    return {
      key: id,
      title: original_name,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
    };
  });
}

export interface MovieTVShow {
  key: number;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  description: string;
  releaseDate: number;
}
