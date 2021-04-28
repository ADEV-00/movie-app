import React, { useContext } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Home.css";
import { MovieTVShowsContext } from "../../context/context";
import MovieItem from "../../components/MovieItem/MovieItem";
import { Link } from "react-router-dom";

type homeProps = {
  handleType: any;
  movieType: string;
};

const Home = ({ handleType, movieType }: homeProps) => {
  const { moviesTVShows } = useContext(MovieTVShowsContext);
  const handleActive = (type: string) => {
    if (movieType === type) {
      return "header_btn-active";
    } else {
      return "header_btn";
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <button
            className={handleActive("movie")}
            onClick={() => handleType("movie")}
          >
            Movies
          </button>
          <button
            onClick={() => handleType("tv")}
            className={handleActive("tv")}
          >
            TV Shows
          </button>
        </div>
        <SearchInput type={movieType} />
        <div className="movie_list_wrapper">
          {moviesTVShows.slice(0, 10).map((movie) => (
            <Link to={{ pathname: `/${movie.key}`, state: movieType }}>
              <MovieItem
                title={movie.title}
                image={movie.poster}
                rating={movie.rating}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
