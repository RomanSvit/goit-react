import React from 'react';
import css from '../modal/Modal.module.css';

const Modal = () => {
    return (
      <>
        <div className={css.Overlay}>
          <div className={css.Modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    );
}
// import * as basicLightbox from "basiclightbox";

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

export default Modal;