import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Cast from "./cast/Cast";
import Reviews from "./revie/Reviews";
import { getDetailsInfoMovie } from "../../services/axios-api";
import DetailsPage from "./detailsPage/DetailsPage";

const getIdFromProps = props => props.match.params.movieId;
const activeStyle = {
  color: "violet"
};
class MovieDetailsPage extends Component {
  state = { items: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    getDetailsInfoMovie(id).then(items => this.setState({ items }));
  }

  handleGoBack = () => {
    console.log(this.props);
    this.props.history.push("/");
  };
  render() {
    const { movieId } = getIdFromProps(this.props);
    console.log(movieId)
    const { items } = this.state;
    console.log(items);
    console.log(this.props.match);
    return (
      <div>
        {items && <DetailsPage items={items} onGoBack={this.handleGoBack} />}
        <ul>
          <li>
            <NavLink
              to={`/movies/${this.props.match.params.movieId}/cast`}
              exact
              activeStyle={activeStyle}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/movies/${this.props.match.params.movieId}/reviews`}
              activeStyle={activeStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>

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
