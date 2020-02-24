import React from "react";
import css from "./ContactList.module.css";

const ContactList = ({ arr, onDelete}) => {
  // const { name, number } = arr;
  // console.log(arr)
  return (
    <>
      <ul className={css.listContact}>
        {arr.length > 0 &&
          arr.map(elem => (
            <li key={elem.id} className={css.listContactItem}>
              <span>{elem.name}</span>
              <span>{elem.number}</span>
              <button id={elem.id} type="button" onClick={onDelete} className={css.buttonDelete}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
