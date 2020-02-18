// import React, { Component } from "react";
// import { getInfoActors } from "../../services/axios-api";
// import shortid from "shortid";

// const getIdFromProps = props => props.match.params.movieId;
// class Cast extends Component {
//   state = { actors: null };
//   componentDidMount() {
//     const id = getIdFromProps(this.props);
//     getInfoActors(id).then(actors => this.setState({ actors }));
//   }
//   render() {
//     const { actors } = this.state;
//     return (
//       <>
//         {actors && (
//           <ul>
//             {actors.cast.map(({ profile_path, name }) => (
//               <li key={shortid()}>
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${profile_path}`}
//                   alt={name}
//                 ></img>
//                 <span>{name}</span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </>
//     );
//   }
// }