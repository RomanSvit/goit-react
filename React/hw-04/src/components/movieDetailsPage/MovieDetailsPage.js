import React from 'react'
import { Route } from "react-router-dom";
import Cast from "./cast/Cast";
import Reviews from "./revie/Reviews"

const MovieDetailsPage = () => {
    return (
      <div>
        <Route path="/movies/:movieId/cast"  component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </div>
    );
}

export default MovieDetailsPage;