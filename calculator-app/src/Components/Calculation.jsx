import React from 'react'
import './Calculation.css'



const Calculation = (props) => {
    return (
        <div className='input'>
            <input 
            type= 'text'
            value= {props.displayValue}
            displayValue={props.displayValue}
            />
        </div>
    )   
}
    

export default Calculation
