import React from 'react';
import css from './ProFile.module.css';

const ProFile = ({user}) => {
    const {tag, name, location, stats, avatar} =user;
    console.dir(stats)
    return (
        <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className={css.avatar}
    />
<h2 className={css.name}>{name}</h2>
<p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location} </p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.Followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.Views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
    <span className={css.quantity}>{stats.Likes}</span>
    </li>
  </ul>
</div>
    );
}

export default ProFile;