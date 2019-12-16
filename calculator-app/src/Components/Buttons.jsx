import React from 'react';

const Buttons = (props) => {
    const {handleInput, handleOperation, handleDisplayOperation, handleEqual} = props

    return (
    <div>

      <p id="row1">0</p>

      <div id="row2">
      <button onClick ={handleDisplayOperation} className="button">AC</button>
      <button onClick ={handleOperation} className="button">%</button>
      <button onClick ={handleDisplayOperation} className="button">+/-</button>
      <button onClick ={handleOperation} className="button orange">/</button>
      </div>

      <div id="row3">
      <button onClick ={handleInput} className="button" >7</button>
      <button onClick ={handleInput} className="button">8</button>
      <button onClick ={handleInput} className="button">9</button>
      <button onClick ={handleOperation} className="button orange">X</button>
      </div>

      <div id="row4">
      <button onClick ={handleInput} className="button">4</button>
      <button onClick ={handleInput} className="button">5</button>
      <button onClick ={handleInput} className="button">6</button>
      <button onClick ={handleInput} className="button orange">-</button>
      </div>

      <div id="row5">
      <button onClick ={handleInput} className="button">1</button>
      <button onClick ={handleInput} className="button">2</button>
      <button onClick ={handleInput} className="button">3</button>
      <button onClick ={handleOperation} className="button orange">+</button>
      </div>

      <div id="row6">
      <button onClick ={handleInput} className="button">0</button>
      <button onClick ={handleDisplayOperation} className="button">.</button>
      <button onClick ={handleEqual} className="button orange">=</button>
      </div>

    </div>
    )
}

export default Buttons;