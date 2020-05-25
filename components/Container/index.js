import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
