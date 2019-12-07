import React from 'react';
import './Calculator.css';

import Button from './Button';


const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const division = (a, b) => a / b;

const doTheMath = (op, a, b) => {
    const num1 = parseFloat(a)
    const num2 = parseFloat(b)
    let result
    
    switch (op) {
        case '+':
            result = sum(num1, num2)
            break;
        case '-':
            result = sub(num1, num2)
            break;
        case 'x':
            result = mul(num1, num2)
            break;
        case '÷':
            result = division(num1, num2)
            break;
        default:
            result = null
            break;
    }
    return result
}


export default class Calculator extends React.Component {
    initialState = {
        displayValue: '0',
        previousValue: 0,
        operation: null,
        reset: 'AC',
        expectingNewValue: false
    }

    state = {...this.initialState}

    handleOperationBtn = value => {
        if (!this.state.expectingNewValue) {
            const arithmeticResult = doTheMath(this.state.operation, this.state.previousValue, this.state.displayValue);   
            this.setState({
                previousValue: this.state.displayValue,
                expectingNewValue: true
            })
            
            if (arithmeticResult) {
                this.setState({displayValue: arithmeticResult})
            }
        }
        this.setState({
            operation: value,
            reset: 'AC'
        })
    }


    handleNumericalBtn = value => {
        let btnValue = value;
        let screen = this.state.displayValue;

        if (btnValue === '.' && (screen === '0' || this.state.expectingNewValue)) {
            btnValue = '0.'
        }

        if (screen === '0' || this.state.expectingNewValue) {
            screen = btnValue;
            if (this.state.expectingNewValue) {
                this.setState({
                    previousValue: this.state.displayValue,
                    expectingNewValue: false
                })
            }
        } else {
            screen += btnValue
        }

        this.setState({
            displayValue: screen,
            reset: 'C'
        })
    }
    

    handleResultBtn = () => {
        let arithmeticResult = doTheMath(this.state.operation, this.state.previousValue, this.state.displayValue);
        if (!arithmeticResult) {
            arithmeticResult = this.state.displayValue;
        }

        this.setState({
            displayValue: arithmeticResult,
            previousValue: 0,
            operation: null,
            reset: 'AC',
            expectingNewValue: true
        })
    }


    handleResetBtn = value => {
        
    }


    handlePercentBtn = () => {
        
    }


    handleSwitchSignBtn = () => {
        
    }

    //######################## RENDER ########################
    render() {
        return (
            <div className='Calculator'>
                <div className='resultDiv'>{this.state.displayValue}</div>
                <div className='calculatorButtons'>
                    <Button htmlClass='button' jsFunction={this.handleResetBtn} disValue={this.state.reset} />
                    <Button htmlClass='button' jsFunction={this.handlePercentBtn} disValue='%' />
                    <Button htmlClass='button' jsFunction={this.handleSwitchSignBtn} disValue='±' />
                    <Button htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='÷' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='7' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='8' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='9' />
                    <Button htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='x' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='4' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='5' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='6' />
                    <Button htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='-' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='1' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='2' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='3' />
                    <Button htmlClass='button orange' jsFunction={this.handleOperationBtn} disValue='+' />
                    <Button htmlId='zeroButton' htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='0' />
                    <Button htmlClass='button' jsFunction={this.handleNumericalBtn} disValue='.' />
                    <Button htmlClass='button orange' jsFunction={this.handleResultBtn} disValue='=' />
                </div>
            </div>
        )
    }
}