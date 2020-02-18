import React from "react";
import css from "./DetailsPage.module.css";
import shortid from "shortid";
const DetailsPage = ({ items, onGoBack }) => {
  const { genres, poster_path, original_title, release_date, overview } = items;
  return (
    <div>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <div className={css.blockDetails}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          className={css.img}
        ></img>
        <div className={css.description}>
          <h2>
            {original_title} ({parseInt(release_date)})
          </h2>
          <p>User Score:</p>
          <span className={css.minTitle}>Overview:</span>
          <p>{overview}</p>
          <span className={css.minTitle}>Genres:</span>
          <ul className={css.genres}>
            {genres.map(elem => (
              <li key={shortid()}>{elem.name},</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
