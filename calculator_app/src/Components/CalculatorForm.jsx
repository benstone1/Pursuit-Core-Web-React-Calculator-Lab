import React from 'react';

const CalculatorForm = (props) => {
    return(
        <div className='calculator-form'>
            <form onSubmit={props.handleSubmitForm}>
                <input type='text' onChange={props.handleInputChange}/>
            </form>
        </div>
    )
}

export default CalculatorForm;