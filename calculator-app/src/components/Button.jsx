import React from "react";

function Button(props) {
  return <div className={props.className}>{props.value}</div>;
}

export default Button;
