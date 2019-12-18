import React from 'react';
// import Buttons from './Buttons'
import Clear from './Clear'

const CalculatorForm = (props) => {
    return(
        <div className='calculator-form'>
            <form onSubmit={props.handleSubmitForm}>
                
                
                {/* <Buttons 
                    handleButtonsClick={props.handleButtonsClick}
                /> */}
                <Clear/>
            </form>
          
        </div>
    )
}

export default CalculatorForm;