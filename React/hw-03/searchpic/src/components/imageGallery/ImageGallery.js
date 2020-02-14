import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import css from "../imageGallery/ImageGallery.module.css";
import shortid from "shortid";

const ImageGallery = ({ arr }) => {
  return (
    <>
      <ul className={css.ImageGallery}>
        {arr.map(elem => (
          <ImageGalleryItem key={shortid.generate()} item={elem} />
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;
