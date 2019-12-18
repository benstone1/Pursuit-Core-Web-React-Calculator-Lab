import React from 'react';

const Buttons = (props) => {
    const {displayValue, displayClear, handleInput, handleOperation, 
           handleDecimalPoint, handleSign, handleClear, handleEqual} = props

    return (
    <div >

      <p id="row1">{displayValue}</p>

      <div className="row">
      <button value={displayClear} onClick={handleClear} >{displayClear}</button>
      <button value="%" onClick={handleOperation} >%</button>
      <button value="+/-" onClick={handleSign} >+/-</button>
      <button value="/" onClick ={handleOperation} className="orange">/</button>
      </div>

      <div className="row">
      <button value="7" onClick={handleInput} >7</button>
      <button value="8" onClick={handleInput}>8</button>
      <button value="9" onClick={handleInput} >9</button>
      <button value="X" onClick={handleOperation} className="orange">X</button>
      </div>

      <div className="row">
      <button value="4" onClick={handleInput} >4</button>
      <button value="5" onClick={handleInput} >5</button>
      <button value="6" onClick={handleInput}>6</button>
      <button value="-" onClick={handleOperation} className="orange">-</button>
      </div>

      <div className="row">
      <button value="1" onClick={handleInput} >1</button>
      <button value="2" onClick={handleInput} >2</button>
      <button value="3" onClick={handleInput} >3</button>
      <button value="+" onClick={handleOperation} className=" orange">+</button>
      </div>

      <div className="row">
      <button id="zero" value="0" onClick={handleInput} >0</button>
      <button value="." onClick={handleDecimalPoint} >.</button>
      <button value="=" onClick={handleEqual} className=" orange">=</button>
      </div>

    </div>
    )
}

export default Buttons;