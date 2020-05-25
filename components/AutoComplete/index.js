import React, { useEffect } from "react";

import Input from "../Input";
import Suggestions from "../Suggestions";

const AutoComplete = () => {
  // we control the input's value
  const [value, setValue] = React.useState("hello");
  // The array of string we display under the input
  const [list, setList] = React.useState([]);

  // When the value updates, we generate a new list
  useEffect(() => {
    const newList = [...Array(100)].map((item, index) => {
      return `${value} - ${index}`;
    });
    setList(newList);
  }, [value, setList]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <Input value={value} onChange={handleInputChange} />
      <Suggestions data={list} />
    </React.Fragment>
  );
};

export default AutoComplete;
