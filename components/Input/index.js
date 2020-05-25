import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Input = ({ value, onChange }) => {
  return (
    <input type="text" className="input" value={value} onChange={onChange} />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
