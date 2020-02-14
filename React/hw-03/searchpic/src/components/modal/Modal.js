import React from 'react';
import css from '../modal/Modal.module.css';

const Modal = ({ onClick, reference }) => {
  return (
    <>
      <div className={css.Overlay} onClick={onClick}>
        <div className={css.Modal}>
          <img src={reference} alt="" />
        </div>
      </div>
    </>
  );
};
// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

export default Modal;