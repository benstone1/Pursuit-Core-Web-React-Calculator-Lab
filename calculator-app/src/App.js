import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';

class App extends React.Component {
  constructor() {
    super(); 
     this.state = {
        displayValue: '0',
        displayClear: 'AC',
        previousValue: null,
        operation: null
      }
  }

  handleInput = (event) => {
   const {displayValue} = this.state
   let secondNum = event.target.value
   let newValue = `${displayValue}${secondNum}` 
    if (displayValue.includes('.')) {
      this.setState({ 
        displayValue: newValue
      })
    } else {
    this.setState({
      displayValue: event.target.value
    })
   }
  }
 
  handleOperation = (event) => {
    const {displayValue} = this.state
    this.setState({
      operation: event.target.value,
      displayClear: 'C',
      previousValue: displayValue,
      displayValue: ''
    })
  }
  

  handleClear = (event) => {
    let btn = event.target.value 
    if (btn === 'AC') {
      this.setState({
        displayValue: '0',
        displayClear: 'AC',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      }) } else if (btn === 'C') {
        this.setState({
          displayValue:'',
          displayClear: 'AC'
        })
      }
  }

  handleDecimalPoint = (event) => {
    const {displayValue} = this.state 
    let newValue = displayValue + '.'
      if (displayValue.includes('.')){
        this.setState({
          displayValue: displayValue
        })
      } else {
      this.setState({
        displayValue: newValue
      })
    }
}

  handleSign = (event) => {
    const {displayValue} = this.state 
    let negativeNum = -Math.abs(displayValue)
    let positiveNum = Math.abs(displayValue)
    if (displayValue === positiveNum) {
      this.setState({
        displayValue: negativeNum
      })
    } else {
      this.setState({
        displayValue: positiveNum
      })
    }
  }

  displayResult = (num) => {
    this.setState({
      displayValue: num
    })
  }

  getPercentage = (num) => {
    let result = num/100
    this.displayResult(result) 
  }

  add = (num1, num2) => {
    let result = num1 + num2
    this.displayResult(result)
  }

  subtract = (num1, num2) => {
    let result = num1 - num2
    this.displayResult(result)
  }

  multiply = (num1, num2) => {
    let result = num1 * num2
    this.displayResult(result)
  }

  divide = (num1, num2) => {
    let result = num1/num2
    this.displayResult(result)
  }


  handleEqual = (event) => {
    const {displayValue, previousValue, operation} = this.state
    let firstNum = Number(previousValue)
    let secondNum = Number(displayValue)
    if (operation === '%') {
      this.getPercentage(displayValue)
    } else if (operation === '+') {
      this.add(firstNum, secondNum)
    } else if (operation === '-') {
      this.subtract(firstNum, secondNum)
    } else if (operation === 'X') {
      this.multiply(firstNum, secondNum)
    } else if (operation === '/') {
      this.divide(firstNum, secondNum)
    }
    this.setState({
      displayClear: 'AC'
    })
  }

  render() {
    const {displayValue, displayClear} = this.state
    const {handleInput, handleOperation, handleDecimalPoint, handleClear, 
           handleSign, handleEqual} = this 
    return (
    <div className="App">
      <Buttons
      displayValue = {displayValue}
      displayClear = {displayClear}
      handleInput = {handleInput}
      handleOperation = {handleOperation}
      handleDecimalPoint = {handleDecimalPoint}
      handleSign = {handleSign}
      handleClear = {handleClear}
      handleEqual = {handleEqual}
      />
    </div>
  );
  }
}

export default App;
