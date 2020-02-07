import React from "react";

const ContactList = ({ arr, onDelete}) => {
  // const { name, number } = arr;
  // console.log(arr)
  return (
    <>
      <ul>
        {arr.length > 0 &&
          arr.map(elem => (
            <li key={elem.id}>
              <span>{elem.name}</span>
              <span>{elem.number}</span>
              <button id={elem.id} type="button" onClick={onDelete}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
