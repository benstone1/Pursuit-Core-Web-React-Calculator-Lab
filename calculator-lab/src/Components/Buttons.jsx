import React from 'react'
import './Buttons.css';


const Buttons = (props) => {
  const {handleInput, handleOperation, handleEqual} = props
  
    // console.log("props", props)
return (
<div className="clac-button">
  <div className="input">
<p>{props.displayValue}</p> 
  </div>
{/* <input placeholder={props.displayValue}  /> */}
<div id="row">
<button value="AC" onClick={props.handleReset}>{props.displayClear}</button>
<button value="%" onClick={props.handlePercent}>%</button>
<button value="+/-" onClick={props.handleNegativePositive}>±</button>
<button value="/" onClick={handleOperation} id="orange">÷</button>
</div>

<div id="row">
<button value="7" onClick={handleInput}>7</button>
<button value="8" onClick={handleInput}>8</button>
<button value="9" onClick={handleInput}>9</button>
<button value="*" onClick={handleOperation} id="orange">*</button>
</div>

<div id="row">
<button value="4" onClick={handleInput}>4</button>
<button value="5" onClick={handleInput}>5</button>
<button value="6" onClick={handleInput}>6</button>
<button value="-" onClick={handleOperation} id="orange">-</button>
</div>

<div id="row">
<button value="1" onClick={handleInput}>1</button>
<button value="2" onClick={handleInput}>2</button>
<button value="3" onClick={handleInput}>3</button>
<button value="+" onClick={handleOperation} id="orange">+</button>
</div>

<div id="row">
<button className="zero" value="0" onClick={handleInput}>0</button>
<button value="." onClick={props.handleDecimal}>.</button>
<button value="=" onClick={handleEqual} id="orange">=</button>
</div>

  </div>
)
    }



export default Buttons;