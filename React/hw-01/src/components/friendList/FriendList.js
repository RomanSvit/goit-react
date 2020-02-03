import React from "react";
import css from "./FriendList.module.css";
import FriendListItem from "./friendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friend}>
        {friends.map(item => (
          <FriendListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default FriendList;
