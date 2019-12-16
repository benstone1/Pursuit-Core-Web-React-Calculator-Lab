/*
Joseph P. Pasaoa
Display Component | React Calculator Lab
*/


/* IMPORTS */
import React from 'react';
import './Display.css';


/* MAIN */
const Display = (props) => {
  return (
    <div id="display">
      {props.displayValue}
    </div>
  );
}

export default Display;
