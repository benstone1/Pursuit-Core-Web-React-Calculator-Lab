import React from 'react';


const Calculator = () => {

    return (
        <div className="calculator">
            <input type="text" class="calculator-screen" value="0" disabled />

            <div className="calculator-keys">
            <button value='AC' className="button all-clear">AC</button>
            <button value='%' className="button percent">%</button>
            <button value='±' className="button postive-negative">±</button>
            <button value='÷' className="button operator-div orange">÷</button>

            <button value='7' className="button key-7">7</button>
            <button value='8' className="button key-8">8</button>
            <button value='9' className="button key-9">9</button>
            <button value='x' className="button operator-times orange">x</button>

            <button value='4' className="button key-4">4</button>
            <button value='5' className="button key-5">5</button>
            <button value='6' className="button key-6">6</button>
            <button value='-' className="button operator-minus orange">-</button>

            <button value='1' className="button key-1">1</button>
            <button value='2' className="button key-2">2</button>
            <button value='3' className="button key-3">3</button>
            <button value='+' className="button operator-plus orange">+</button>

            <button value='0' className="button key-0">0</button>
            <button value='.' className="button decimal">.</button>
            <button value='=' className="button equal-sign orange">=</button>
            </div>
        </div>
    )
}

export default Calculator;