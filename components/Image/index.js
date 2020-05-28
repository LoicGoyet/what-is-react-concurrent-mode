import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Image = ({ resource }) => {
  const src = resource.read();

  return <img className="image" src={src} />;
};

Image.propTypes = {
  resource: PropTypes.shape({
    read: PropTypes.func.isRequired,
  }).isRequired,
};

export default Image;
