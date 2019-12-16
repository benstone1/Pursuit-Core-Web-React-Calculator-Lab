import React from 'react';

const Buttons = (props) => {
    const {displayValue, handleInput, handleOperation, handleDisplayOperation, handleEqual} = props

    return (
    <div >

      <p id="row1">{displayValue}</p>

      <div className="row">
      <button onClick ={handleDisplayOperation} >AC</button>
      <button onClick ={handleOperation} >%</button>
      <button onClick ={handleDisplayOperation} >+/-</button>
      <button onClick ={handleOperation} className="orange">/</button>
      </div>

      <div className="row">
      <button onClick ={handleInput} >7</button>
      <button onClick ={handleInput}>8</button>
      <button onClick ={handleInput} >9</button>
      <button onClick ={handleOperation} className="orange">X</button>
      </div>

      <div className="row">
      <button onClick ={handleInput} >4</button>
      <button onClick ={handleInput} >5</button>
      <button onClick ={handleInput}>6</button>
      <button onClick ={handleInput} className="orange">-</button>
      </div>

      <div className="row">
      <button onClick ={handleInput} >1</button>
      <button onClick ={handleInput} >2</button>
      <button onClick ={handleInput} >3</button>
      <button onClick ={handleOperation} className=" orange">+</button>
      </div>

      <div className="row">
      <button id="zero" onClick ={handleInput} >0</button>
      <button onClick ={handleDisplayOperation} >.</button>
      <button onClick ={handleEqual} className=" orange">=</button>
      </div>

    </div>
    )
}

export default Buttons;