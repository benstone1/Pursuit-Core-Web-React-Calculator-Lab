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
    const { handleClicks } = this.props;
    return (
      <div id="console">
        <button name="AC" onClick={handleClicks} className="calcButton">AC</button> 
        <button name="%" onClick={handleClicks} className="calcButton">%</button>
        <button name="±" onClick={handleClicks} className="calcButton">±</button>
        <button name="÷" onClick={handleClicks} className="calcButton calcButton--orange">÷</button>
        <button name="7" onClick={handleClicks} className="calcButton">7</button>
        <button name="8" onClick={handleClicks} className="calcButton">8</button>
        <button name="9" onClick={handleClicks} className="calcButton">9</button>
        <button name="x" onClick={handleClicks} className="calcButton calcButton--orange">x</button>
        <button name="4" onClick={handleClicks} className="calcButton">4</button>
        <button name="5" onClick={handleClicks} className="calcButton">5</button>
        <button name="6" onClick={handleClicks} className="calcButton">6</button>
        <button name="-" onClick={handleClicks} className="calcButton calcButton--orange">-</button>
        <button name="1" onClick={handleClicks} className="calcButton">1</button>
        <button name="2" onClick={handleClicks} className="calcButton">2</button>
        <button name="3" onClick={handleClicks} className="calcButton">3</button>
        <button name="+" onClick={handleClicks} className="calcButton calcButton--orange">+</button>
        <button name="0" onClick={handleClicks} className="calcButton calcButton--2wide">0</button>
        <button name="." onClick={handleClicks} className="calcButton">.</button>
        <button name="=" onClick={handleClicks} className="calcButton calcButton--orange">=</button>
      </div>
    );
  }
}


/* EXPORT */
export default Console;
