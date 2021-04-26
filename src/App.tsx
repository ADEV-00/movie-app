import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import { MovieTVShowsContext } from "./context/context";
import { MovieTVShow, getMoviesTVShows } from "./context/movie";

function App() {
  const [type, setType] = React.useState("movie");
  const handleCallBack = (childData: any) => {
    setType(childData);
  };

  useEffect(() => {
    getMoviesTVShows(type)
      .then(setMovie)
      .catch((err) => console.log(err));
  }, [type]);
  const [movies, setMovie] = React.useState<MovieTVShow[]>([]);
  return (
    <MovieTVShowsContext.Provider
      value={{ moviesTVShows: movies, searchMoviesTVShows: setMovie }}
    >
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Home handleType={handleCallBack} movieType={type} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </MovieTVShowsContext.Provider>
  );
}

export default App;
