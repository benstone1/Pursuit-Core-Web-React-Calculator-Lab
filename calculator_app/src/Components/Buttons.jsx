import React from 'react';
// import ButtonsDisplay from './ButtonsDisplay';
import './Buttons.css'

const Buttons = (props) => {
    // if (value !== typeof 'number') {
    //     return true
    // }
    return (
        <div className='button'>
            <button onClick={props.handleClick}>
                {props.name}
               
            </button>
        
          
        </div>
    )
}

export default Buttons;