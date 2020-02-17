import React, { Component } from "react";
import { Route } from "react-router-dom";
import Cast from "./cast/Cast";
import Reviews from "./revie/Reviews";
import { getDetailsInfoMovie } from "../../services/axios-api";

const getIdFromProps = props => props.match.params.movieId;

class MovieDetailsPage extends Component {
  state = { items: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    getDetailsInfoMovie(id).then(items => this.setState({ items }));
  }
  render() {
    const { items } = this.state;
    console.log(items)
    console.log(this.props.match);
    return (
      <div>
        <h2>eeeeee</h2>
        <Route
          path="/movies/:movieId/cast"
          component={Cast}
          itemObject={items}
        />
        <Route
          path="/movies/:movieId/reviews"
          component={Reviews}
          itemObject={items}
        />
      </div>
    );
  }
}

export default MovieDetailsPage;
