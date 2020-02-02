import React from 'react';
import css from './ProFile.module.css';
import PropTypes from 'prop-types';

const ProFile = ({user}) => {
    const {tag, name, location, stats, avatar} =user;
    // console.dir(stats)
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt={name}
      className={css.avatar}
    />
    <h2 className={css.name}>{name}</h2>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
    );
}
// ProFile.defaultProps={
//   avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
// };
ProFile.propTypes = {
  user:PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
})
};
export default ProFile;