import React from "react";
import PropTypes from "prop-types";

const Hello = ({ name }) => {
  return <div className="hello">Hello {name}</div>;
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
