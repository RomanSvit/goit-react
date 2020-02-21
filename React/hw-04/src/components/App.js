import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
// import HomePage from "./homePage/HomePage";
// import MoviesPage from "./moviesPage/MoviesPage";
// import MovieDetailsPage from "./movieDetailsPage/MovieDetailsPage";
const AsyncHomePage = lazy(() => import("./homePage/HomePage" /*webpackChunkName: "home-page" */ ));
const AsyncMovieDetailsPage = lazy(() =>
  import(
    "./movieDetailsPage/MovieDetailsPage" /*webpackChunkName: "Movie-Details-Page" */
  )
);
const AsyncMoviesPage = lazy(() =>
  import("./moviesPage/MoviesPage" /*webpackChunkName: "Movies-Page" */)
);


const App = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact component={AsyncHomePage} />
          <Route path="/movies/:movieId" component={AsyncMovieDetailsPage} />
          <Route path="/movies" component={AsyncMoviesPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
