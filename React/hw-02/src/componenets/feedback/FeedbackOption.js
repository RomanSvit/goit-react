import React from "react";
const FeedbackOption = ({ good, neutral, bad, title }) => {
  return (
    <>
      <button type="button" name="good" onClick={good}>
        good
      </button>
      <button type="button" name="neutral" onClick={neutral}>
        neutral
      </button>
      <button type="button" name="bad" onClick={bad}>
        bad
      </button>
      <h2>{title}</h2>
    </>
  );
};

export default FeedbackOption;
