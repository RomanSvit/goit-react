import React, { Component } from "react";
import { getInfoReviews } from "../../../services/axios-api";
import shortid from "shortid";
import css from "./Reviews.module.css"
const getIdFromProps = props => props.match.params.movieId;
class Reviews extends Component {
  state = { reviews: null };

  componentDidMount() {
    console.log(this.props);
    const id = getIdFromProps(this.props);
    getInfoReviews(id).then(reviews => this.setState({ reviews }));
  }

  render() {
    const { reviews } = this.state;
    console.log(reviews);
    return (
      <>
        {reviews && (
          <ul>
            {reviews.results.map(({ content, author }) => (
              <li key={shortid()} className={css.descriptionBlock}>
                <span className={css.span}>Author:{author}</span>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
