import React from 'react';

const Calculator = (props) => {
    return (
        <div className='calculator-whole'>


            <input className='input-stage' type='text' value={props.display} readOnly />
            
            {(props.method === null) ? 
            <input type='button' className='button' id='all-clear' onClick={props.allClearClick} value='AC' /> : 
            <input type='button' className='button' id='clear' onClick={props.clearClick} value='C' />}
            
            <input type='button' className='button' id='percent' onClick={props.percentageClick} value='%' />
            <input type='button' className='button' id='negative' onClick={props.negateClick} value='±' />
            <input type='button' className='button orange' id='divide' onClick={props.divClick} value='÷' />
            <input type='button' className='button' id='num7' onClick={props.numberClick} value='7' />
            <input type='button' className='button' id='num8' onClick={props.numberClick} value='8' />
            <input type='button' className='button' id='num9' onClick={props.numberClick} value='9' />
            <input type='button' className='button orange' id='multiply' onClick={props.mulClick} value='x' />
            <input type='button' className='button' id='num4' onClick={props.numberClick} value='4' />
            <input type='button' className='button' id='num5' onClick={props.numberClick} value='5' />
            <input type='button' className='button' id='num6' onClick={props.numberClick} value='6' />
            <input type='button' className='button orange' id='subtract' onClick={props.subClick} value='-' />
            <input type='button' className='button' id='num1' value='1' onClick={props.numberClick} />
            <input type='button' className='button' id='num2' value='2' onClick={props.numberClick} />
            <input type='button' className='button' id='num3' value='3' onClick={props.numberClick} />
            <input type='button' className='button orange' id='addition' onClick={props.addClick} value='+' />
            <input type='button' className='button' id='num0' onClick={props.numberClick} value='0' />
            <input type='button' className='button' id='decimal' onClick={props.numberClick} value='.' />
            <input type='button' className='button orange' id='equals' onClick={props.equalsClick} value='=' />
        </div>
    )
}

export default Calculator;