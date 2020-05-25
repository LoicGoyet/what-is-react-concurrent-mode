import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const HelloMessage = ({ name }) => {
  return <div>Hello {name}</div>;
};

HelloMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Loïc" />, mountNode);
