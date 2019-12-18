import React from 'react';


const Calculator = (props) => {

    return (
        <div className="calculator">
            <input type="text" class="calculator-screen" value={props.displayValue} />

            <div className="calculator-keys">
            <button value='AC' id="all-clear" className="button all-clear" onClick={props.handleAllClear}>AC</button>
            <button value='C' id="clear" className="button clear" onClick={props.handleClear}>C</button>

            <button value='%' className="button percent" onClick={props.handlePercent}>%</button>
            <button value='±' className="button postive-negative" onClick={props.handlePlusMinus}>±</button>
            <button value='÷' className="button operator-div orange" onClick={props.handleOperationClick}>÷</button>

            <button value='7' className="button key-7" onClick={props.handleKeyClick}>7</button>
            <button value='8' className="button key-8" onClick={props.handleKeyClick}>8</button>
            <button value='9' className="button key-9" onClick={props.handleKeyClick}>9</button>
            <button value='x' className="button operator-times orange" onClick={props.handleOperationClick}>x</button>

            <button value='4' className="button key-4" onClick={props.handleKeyClick}>4</button>
            <button value='5' className="button key-5" onClick={props.handleKeyClick}>5</button>
            <button value='6' className="button key-6" onClick={props.handleKeyClick}>6</button>
            <button value='-' className="button operator-minus orange" onClick={props.handleOperationClick}>-</button>

            <button value='1' className="button key-1" onClick={props.handleKeyClick}>1</button>
            <button value='2' className="button key-2" onClick={props.handleKeyClick}>2</button>
            <button value='3' className="button key-3" onClick={props.handleKeyClick}>3</button>
            <button value='+' className="button operator-plus orange" onClick={props.handleOperationClick}>+</button>

            <button value='0' className="button key-0" onClick={props.handleKeyClick}>0</button>
            <button value='.' className="button decimal" onClick={props.handleKeyClick}>.</button>
            <button value='=' className="button equal-sign orange" onClick={props.handleEqualClick}>=</button>
            </div>
        </div>
    )
}

export default Calculator;