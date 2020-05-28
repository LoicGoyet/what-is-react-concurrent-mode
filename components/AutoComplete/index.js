import React from "react";

import Input from "../Input";
import Suggestions from "../Suggestions";

const AutoComplete = () => {
  // we control the input's value
  const [value, setValue] = React.useState("");
  // The array of string we display under the input
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    let newList = [];

    if (value) {
      newList = [...Array(100)].map((item, index) => {
        return `${value} - ${index}`;
      });
    }

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
