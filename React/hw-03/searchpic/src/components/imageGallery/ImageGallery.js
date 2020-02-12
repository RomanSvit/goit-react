import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import css from "../imageGallery/ImageGallery.module.css";

const ImageGallery = ({ arr }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {arr.map(elem => (
          <ImageGalleryItem key={elem.id} arrr={arr} item={elem} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
