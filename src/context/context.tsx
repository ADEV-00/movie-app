import React from "react";
import { MovieTVShow } from "./movie";

export const MovieTVShowsContext = React.createContext<{
  moviesTVShows: MovieTVShow[];
  searchMoviesTVShows: Function;
}>({
  moviesTVShows: [],
  searchMoviesTVShows: Function,
});
