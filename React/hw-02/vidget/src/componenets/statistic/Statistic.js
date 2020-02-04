import React from "react";
const Statistic = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <p>Good :{good}</p>
      <p>Neutral :{neutral}</p>
      <p>Bad :{bad}</p>
      <p>Total :{total}</p>
      <p>PositivePersentage :{positive || 0}%</p>
    </>
  );
};

export default Statistic;
