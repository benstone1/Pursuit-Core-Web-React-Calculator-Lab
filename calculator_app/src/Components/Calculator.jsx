import React, { Component } from 'react';
import Buttons from './Buttons';
import ButtonsDisplay from './ButtonsDisplay';
// import CalculatorForm from './Components/CalculatorForm';

class Calculator extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            display: 0,
            buttonValue: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            display: e.target.value,
            buttonValue: e.target.value

        
        })
        console.log('click', e.target.value)
    }

    render() {
        const {display} = this.state
        return (
            <div className='calculator'>
                <ButtonsDisplay
                    display={display.name}
                    handleClick={this.handleClick}
                />
                <div className='wrapper'>
                    <Buttons name='AC' value={display}  handleClick={this.handleClick}/>
                    <Buttons name='%'/>
                    <Buttons name='+-'/>
                    <Buttons name='/'/>
                </div>
                <div className='wrapper'>
                    <Buttons name='7'/>
                    <Buttons name='8'/>
                    <Buttons name='9'/>
                    <Buttons name='*'/>
                </div>
                <div className='wrapper'>
                    <Buttons name='4'/>
                    <Buttons name='5'/>
                    <Buttons name='6'/>
                    <Buttons name='-'/>
                </div>
                <div className='wrapper'>
                    <Buttons name='1'/>
                    <Buttons name='2'/>
                    <Buttons name='3'/>
                    <Buttons name='+'/>
                </div>
                <div className='wrapper'>
                    <Buttons name='0'/>
                    <Buttons name='.'/>
                    <Buttons name='='/>
                </div>

            </div>
        )
    }
}

export default Calculator;