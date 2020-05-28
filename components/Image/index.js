import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Image = ({ src }) => {
  return <img className="image" src={src} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
