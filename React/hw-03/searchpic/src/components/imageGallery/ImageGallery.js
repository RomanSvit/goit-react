import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import css from '../imageGallery/ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <>
      <ul className={css.ImageGallery}>
          <ImageGalleryItem />
      </ul>
    </>
  );
};

export default ImageGallery;
