import React from "react";
import { Link } from "react-router-dom";
const SearchPage = ({ arr,prop }) => {
  const {location}=prop;
  return (
    <>
      <ul>
        {arr.map(({ original_title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location }
              }}
            >
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchPage;
