import React from 'react';

const Calculator = (props) => {
    return (
        <div className='calculator'>
            <div className='display'>
                 {props.display}
            </div>
           <div className='wrapper'>
             <button className='button' name='AC' onClick={props.handleACButton} >AC</button>
                <button className='button' name='%' onClick={props.handlePercentage} >%</button>
                <button className= 'button' name='+-' onClick={props.handleNegAndPos} >+-</button>
                <button className='orange' name='/' onClick={props.handleOperation} >/</button>
            </div>
                <div className='wrapper'>
                <button className='button' name='7' onClick={props.handleNumbers} >7</button>
                <button className='button' name='8' onClick={props.handleNumbers} >8</button>
                <button className='button' name='9' onClick={props.handleNumbers} >9</button>
                <button className='orange' name='*' onClick={props.handleOperation} >*</button>
            </div>
            <div className='wrapper'>
                <button className='button' name='4' onClick={props.handleNumbers} >4</button>
                <button className='button' name='5' onClick={props.handleNumbers} >5</button>
                <button className='button' name='6' onClick={props.handleNumbers} >6</button>
                <button className='orange' name='-' onClick={props.handleOperation} >-</button>
            </div>
            <div className='wrapper'>
                <button className='button' name='1' onClick={props.handleNumbers} >1</button>
                <button className='button' name='2' onClick={props.handleNumbers} >2</button>
                <button className='button' name='3' onClick={props.handleNumbers} >3</button>
                <button className='orange' name='+' onClick={props.handleOperation} >+</button>
            </div>
            <div className='wrapper'> 
                <button className='button' name='0' onClick={props.handleNumbers} >0</button>
                <button className='button' name='.' onClick={props.handleDecimal} >.</button>
                <button id='equal' className='orange' name='=' onClick={props.handleEqualSign} >=</button>
            </div>

        </div>
    )
}


export default Calculator;