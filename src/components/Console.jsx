/*
Joseph P. Pasaoa
Console Component | React Calculator Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './Console.css';


/* MAIN */
class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { displayValue, waitingForNewValue, handleClicks } = this.props;
    let cOrAc = (displayValue !== '0' && !waitingForNewValue) ? "C" : "AC";

    return (
      <div id="console" onClick={handleClicks}>
        <button name={cOrAc} className="calcButton">{cOrAc}</button> 
        <button name="%" className="calcButton">%</button>
        <button name="±" className="calcButton">±</button>
        <button name="÷" className="calcButton calcButton--orange">÷</button>
        <button name="7" className="calcButton">7</button>
        <button name="8" className="calcButton">8</button>
        <button name="9" className="calcButton">9</button>
        <button name="x" className="calcButton calcButton--orange">x</button>
        <button name="4" className="calcButton">4</button>
        <button name="5" className="calcButton">5</button>
        <button name="6" className="calcButton">6</button>
        <button name="-" className="calcButton calcButton--orange">-</button>
        <button name="1" className="calcButton">1</button>
        <button name="2" className="calcButton">2</button>
        <button name="3" className="calcButton">3</button>
        <button name="+" className="calcButton calcButton--orange">+</button>
        <button name="0" className="calcButton calcButton--2wide">0</button>
        <button name="." className="calcButton">.</button>
        <button name="=" className="calcButton calcButton--orange">=</button>
      </div>
    );
  }
}


/* EXPORT */
export default Console;
