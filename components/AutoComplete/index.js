import React from "react";

import Input from "../Input";
import Suggestions from "../Suggestions";

const AutoComplete = () => {
  // we control the input's value
  const [value, setValue] = React.useState("");
  // The array of string we display under the input
  const [list, setList] = React.useState([]);

  // new hook useDeferredValue !
  const deferredValue = React.unstable_useDeferredValue(value, {
    timeoutMs: 10000,
  });

  React.useEffect(() => {
    let newList = [];

    if (deferredValue) {
      newList = [...Array(100)].map((item, index) => {
        return `${deferredValue} - ${index}`;
      });
    }

    setList(newList);
  }, [deferredValue, setList]);

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
