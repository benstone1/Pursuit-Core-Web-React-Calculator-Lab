import React from 'react'

const ButtonTable = (props) => {
    const startedMath = props.waitingForNewValue
    return (
        <div className="button-holder">
            { startedMath === false ? (
            <button className="button standard" value="clear" onClick={props.handleAllClear}>AC</button>
             ) : (
             <button className="button standard" value="clear" onClick={props.handleClear}>C</button>
             )}

            <button className="button standard" value="%" onClick={props.handlePercent}>%</button>
            <button className="button standard" value="plus-minus">±</button>
            <button className="button standard orange" value="divide" onClick={props.handleOperator}>÷</button>
            <button className="button standard" value="7" onClick={props.handleNumberClick}>7</button>
            <button className="button standard" value="8" onClick={props.handleNumberClick}>8</button>
            <button className="button standard" value="9" onClick={props.handleNumberClick}>9</button>
            <button className="button standard orange" value="multiply" onClick={props.handleOperator}>x</button>
            <button className="button standard" value="4" onClick={props.handleNumberClick}>4</button>
            <button className="button standard" value="5" onClick={props.handleNumberClick}>5</button>
            <button className="button standard" value="6" onClick={props.handleNumberClick}>6</button>
            <button className="button standard orange" value="subtract" onClick={props.handleOperator}>-</button>
            <button className="button standard" value="1" onClick={props.handleNumberClick}>1</button>
            <button className="button standard" value="2" onClick={props.handleNumberClick}>2</button>
            <button className="button standard" value="3" onClick={props.handleNumberClick}>3</button>
            <button className="button standard orange" value="add" onClick={props.handleOperator}>+</button>
            <button className="button wide" value="0" onClick={props.handleNumberClick}>0</button>
            <button className="button standard" value="." onClick={props.handleDecimal}>.</button>
            <button className="button standard orange" value="=" onClick={props.handleEqual}>=</button>
        </div>
    )
}

export default ButtonTable