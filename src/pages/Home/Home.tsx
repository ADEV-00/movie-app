import React, { useState, useContext } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import "./Home.css";
import { MovieTVShowsContext } from "../../context/context";
import MovieItem from "../../components/MovieItem/MovieItem";

type homeProps = {
  handleType: any;
  movieType: string;
};

const Home = ({ handleType, movieType }: homeProps) => {
  const [active, setActive] = useState("");
  console.log(active);
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
        <SearchInput type={"Movies"} />
        <div className="movie_list_wrapper">
          {moviesTVShows.slice(0, 10).map((movie) => (
            <MovieItem
              title={movie.title}
              image={movie.poster}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
