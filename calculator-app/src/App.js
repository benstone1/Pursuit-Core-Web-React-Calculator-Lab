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
        operation: null,
        waitingForNewValue: false
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
      waitingForNewValue: true
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
    let btn = event.target.value 
    const {displayValue} = this.state 
    let newValue = displayValue + '.'
    if (btn === ".") {
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

  getPercentage = () => {
    console.log('getting percentage')
  }

  add = () => {
    console.log('adding')
  }

  subtract = () => {
    console.log('subtracting')
  }

  multiply = () => {
    console.log('multiplying')
  }

  divide = () => {
    console.log('dividing')
  }

  handleEqual = (event) => {
    console.log('getting result')
    //const {displayValue, previousValue, operation, waitingForNewValue} = this.state
    //let counter = 0;
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
