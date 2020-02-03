import React from "react";
import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ item }) => {
  // console.log("item", item);
  const { avatar, isOnline, name} = item;
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOn : css.statusOf}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired
  })
};
export default FriendListItem;
