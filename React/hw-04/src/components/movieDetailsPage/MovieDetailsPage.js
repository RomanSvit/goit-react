import React, { Component, lazy, Suspense } from "react";
import { Route, NavLink } from "react-router-dom";
import { getDetailsInfoMovie } from "../../services/axios-api";
import DetailsPage from "./detailsPage/DetailsPage";
// import Cast from "./cast/Cast";
// import Reviews from "./revie/Reviews";

const AsyncCast = lazy(() =>
  import("./cast/Cast" /*webpackChunkName: "cast-page" */)
);
const AsyncReviews = lazy(() =>
  import("./revie/Reviews" /*webpackChunkName: "revie-page" */)
);

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
    // console.log(this.props);
    const { history, location } = this.props;
    if (location.state) {
      return history.push(location.state.from);
    }
    history.push("/");
  };

  render() {
    const { items } = this.state;
    // console.log(items)
    // console.log(this.props.match);
    return (
      <div>
        {/* <h2>{JSON.stringify(this.props.location.state)}</h2> */}
        {items && <DetailsPage items={items} onGoBack={this.handleGoBack} />}
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${this.props.match.params.movieId}/cast`
              }}
              exact
              activeStyle={activeStyle}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${this.props.match.params.movieId}/reviews`
              }}
              activeStyle={activeStyle}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Route
            path="/movies/:movieId/cast"
            component={AsyncCast}
            itemObject={items}
          />
          <Route
            path="/movies/:movieId/reviews"
            component={AsyncReviews}
            itemObject={items}
          />
        </Suspense>
      </div>
    );
  }
}

export default MovieDetailsPage;
