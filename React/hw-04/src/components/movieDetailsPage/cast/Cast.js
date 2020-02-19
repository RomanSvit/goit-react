import React, { Component } from "react";
import { getInfoActors } from "../../../services/axios-api";
import shortid from "shortid";
import css from "./Cast.module.css";
// const defImg =
//   "https://www.shutterstock.com/ru/image-vector/default-avatar-profile-icon-grey-photo-518740741"
const getIdFromProps = props => props.match.params.movieId;
class Cast extends Component {
  state = { actors: null };
  componentDidMount() {
    console.log(this.props);
    const id = getIdFromProps(this.props);
    getInfoActors(id).then(actors => this.setState({ actors }));
  }
  render() {
    const { actors } = this.state;
    console.log(actors);
    return (
      <>
        {actors && (
          <ul className={css.blockCart}>
            {actors.cast.map(({ profile_path, name }) => (
              <li key={shortid()} className={css.cartActor}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  className={css.img}
                ></img>
                <span className={css.name}>{name}</span>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
