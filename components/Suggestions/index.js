import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Suggestions = ({ data }) => {
  return (
    <ul className="suggestions">
      {data.map((item) => (
        <li className="suggestions__item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

Suggestions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Suggestions;
