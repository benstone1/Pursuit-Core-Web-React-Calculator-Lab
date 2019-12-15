import React from 'react'
import './Buttons.css';


const Buttons = (props) => {
    console.log("props", props)
return (
<div className="clac-button">
<input placeholder={props.displayValue}  />
<div id="row">
<button value="AC" onClick={props.handleInput}>AC</button>
<button value="%" onClick={props.handleInput}>%</button>
<button value="+/-" onClick={props.handleInput}>+/-</button>
<button value="/" onClick={props.handleInput} id="orange">/</button>
</div>

<div id="row">
<button value="7" onClick={props.handleInput}>7</button>
<button value="8" onClick={props.handleInput}>8</button>
<button value="9" onClick={props.handleInput}>9</button>
<button value="*" onClick={props.handleInput} id="orange">*</button>
</div>

<div id="row">
<button value="4" onClick={props.handleInput}>4</button>
<button value="5" onClick={props.handleInput}>5</button>
<button value="6" onClick={props.handleInput}>6</button>
<button value="-" onClick={props.handleInput} id="orange">-</button>
</div>

<div id="row">
<button value="1" onClick={props.handleInput}>1</button>
<button value="2" onClick={props.handleInput}>2</button>
<button value="3" onClick={props.handleInput}>3</button>
<button value="+" onClick={props.handleInput} id="orange">+</button>
</div>

<div id="row">
<button value="0" onClick={props.handleInput}>0</button>
<button value="." onClick={props.handleInput}>.</button>
<button value="=" onClick={props.handleInput} id="orange">=</button>
</div>

  </div>
)
    }



export default Buttons;