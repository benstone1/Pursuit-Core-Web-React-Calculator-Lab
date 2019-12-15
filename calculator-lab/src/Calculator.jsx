import React from 'react';
import './Calculator.css'

class Calculator extends React.Component {
    render() {
        return (
            <div className="holder">
            <div className="calculator">
                <div className="row buttons">
                    <div className="col-12 inputview">{this.props.display}</div>
                    <button value='AC' className="button col-3">AC</button> 
                    <button value='%' className="button col-3">%</button> 
                    <button value='±' className="button col-3">±</button> 
                    <button value='÷' className="button col-3 orange">÷</button>
                    <button value='7' className="button col-3">7</button> 
                    <button value='8' className="button col-3">8</button> 
                    <button value='9' className="button col-3">9</button> 
                    <button value='x' className="button col-3 orange">x</button>
                    <button value='4' className="button col-3">4</button> 
                    <button value='5' className="button col-3">5</button> 
                    <button value='6' className="button col-3">6</button> 
                    <button value='-' className="button col-3 orange">-</button>
                    <button value='1' className="button col-3">1</button> 
                    <button value='2' className="button col-3">2</button> 
                    <button value='3' className="button col-3">3</button> 
                    <button value='+' className="button col-3 orange">+</button>
                    <button value='0' className="button col-6">0</button> 
                    <button value='.' className="button col-3">.</button> 
                    <button value='=' className="button col-3 orange">=</button>
                </div>
            </div>
            </div>
        )
    }
}

export default Calculator;
