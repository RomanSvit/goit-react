import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import MoviesPage from "./moviesPage/MoviesPage";
import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
import Nav from "./nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
};

export default App;
