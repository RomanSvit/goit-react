import React from "react";
import {Link} from 'react-router-dom'
const ArticlesList = ({ arrArticles }) => {
  return (
    <>
      <ul>
        {arrArticles.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ArticlesList;
