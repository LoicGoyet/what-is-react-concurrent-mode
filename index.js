import React from "react";
import ReactDOM from "react-dom";

const HelloMessage = ({name}) => {
    return (
        <div>Hello {name}</div>
    )
}

const mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);