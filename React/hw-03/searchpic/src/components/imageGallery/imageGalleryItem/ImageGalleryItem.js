import React from "react";
import css from "../imageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item }) => {
  // console.log(item);
  const { smallImage, tags, id } = item;
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          id={id}
          src={smallImage}
          alt={tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
