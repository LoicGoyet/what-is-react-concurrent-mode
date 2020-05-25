import React from "react";

import Input from "../Input";
import Suggestions from "../Suggestions";

const AutoComplete = () => {
  const [value, setValue] = React.useState("");
  const [list, setList] = React.useState([]);

  // new hook useTransition !
  const [startTransition] = React.unstable_useTransition({
    timeoutMs: 10000,
  });

  React.useEffect(() => {
    let newList = [];

    if (value) {
      newList = [...Array(100)].map((item, index) => {
        return `${value} - ${index}`;
      });
    }

    startTransition(() => {
      setList(newList);
    });
  }, [value, setList, startTransition]);

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
