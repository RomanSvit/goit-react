import React from "react";
const Form = ({ showName, handleSubmit, name ,number}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          Name
          <input type="text" name="name" onChange={showName} value={name}></input>
        </label>
        <label>
          Number
          <input type="tel" name="number" onChange={showName} value={number}></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default Form;
