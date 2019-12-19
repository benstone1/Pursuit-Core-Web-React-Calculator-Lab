import React from 'react';

const Calculator = (props) => {
    return (
        <div className='calculator'>
            <div className='display'>
                 {props.display}
            </div>
           <div className='wrapper'>
             <button className='button' name='AC' onClick={props.handleACButton} value={props.name}>AC</button>
                <button className='button' name='%' onClick={props.handlePercentage} value={props.display}>%</button>
                <button className= 'button' name='+-' onClick={props.handleNegAndPos} value={props.display}>+-</button>
                <button className='orange' name='/' onClick={props.handleOperation} value={props.display}>/</button>
            </div>
                <div className='wrapper'>
                <button className='button' name='7' onClick={props.handleNumbers} value={props.display}>7</button>
                <button className='button' name='8' onClick={props.handleNumbers} value={props.display}>8</button>
                <button className='button' name='9' onClick={props.handleNumbers} value={props.display}>9</button>
                <button className='orange' name='*' onClick={props.handleOperation} value={props.display}>*</button>
            </div>
            <div className='wrapper'>
                <button className='button' name='4' onClick={props.handleNumbers} value={props.display}>4</button>
                <button className='button' name='5' onClick={props.handleNumbers} value={props.display}>5</button>
                <button className='button' name='6' onClick={props.handleNumbers} value={props.display}>6</button>
                <button className='orange' name='-' onClick={props.handleOperation} value={props.display}>-</button>
            </div>
            <div className='wrapper'>
                <button className='button' name='1' onClick={props.handleNumbers} value={props.display}>1</button>
                <button className='button' name='2' onClick={props.handleNumbers} value={props.display}>2</button>
                <button className='button' name='3' onClick={props.handleNumbers} value={props.display}>3</button>
                <button className='orange' name='+' onClick={props.handleOperation} value={props.display}>+</button>
            </div>
            <div className='wrapper'> 
                <button className='button' name='0' onClick={props.handleNumbers} value={props.display}>0</button>
                <button className='button' name='.' onClick={props.handleDecimal} value={props.display}>.</button>
                <button id='equal' className='orange' name='=' onClick={props.handleEqualSign} value={props.display}>=</button>
            </div>

        </div>
    )
}


export default Calculator;