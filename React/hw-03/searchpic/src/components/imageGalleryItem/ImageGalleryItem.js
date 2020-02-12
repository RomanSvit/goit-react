import React from "react";
import css from "../imageGalleryItem/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ item }) => {
  // console.log(item);
  const { webformatURL, tags } = item;
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          className={css.ImageGalleryItemImage}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
