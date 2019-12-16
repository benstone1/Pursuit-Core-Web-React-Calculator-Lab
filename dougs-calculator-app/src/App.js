import React, { Component } from 'react';
import './App.css';
import Display from './Components/Display'
import ButtonTable from './Components/ButtonTable'

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  handleOperator = (event) => {
    let operation = event.target.value;
    let currentNumber = this.state.displayValue
    console.log(operation)
    this.setState({
      displayValue: "0",
      previousValue: currentNumber,
      operation: operation
    })
  }

  handleAllClear = () => {
    console.log("All Clear!")
    this.setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    })
  }

  handleClear = () => {
    console.log("Cleared!")
    this.setState({
      displayValue: '0',
      waitingForNewValue: false
    })
  }

  handlePercent = () => {
    console.log("Percent fired")
    let currentNumber = parseInt(this.state.displayValue)
    this.setState({
      displayValue: currentNumber / 100
    })
  }

  handleDecimal = () => {
    console.log("Decimal fired")
    let currentNumber = this.state.displayValue
    this.setState({
      displayValue: currentNumber + "."
    })
  }

  handleNumberClick = (event) => {
    let currentNumber = this.state.displayValue
    let newNumber = event.target.value
    let updatedNumber
    if (currentNumber === "0") {
      updatedNumber = newNumber
    } else {
      updatedNumber = currentNumber + newNumber
    }
    console.log(updatedNumber)
    this.setState({
      displayValue: updatedNumber,
      waitingForNewValue: true
    })
  }

  handleEqual = () => {
    let currentNumber = parseFloat(this.state.displayValue)
    let previousValue = parseFloat(this.state.previousValue)
    let operation = this.state.operation
    let answer
    if (operation === "divide") {
      answer = previousValue / currentNumber
    } else if (operation === "multiply") {
      answer = previousValue * currentNumber
    } else if (operation === "subtract") {
      answer = previousValue - currentNumber
    } else if (operation === "add") {
      answer = previousValue + currentNumber
    } else if (!operation) {
      answer = currentNumber
    }
    this.setState({
      displayValue: answer
    })
  }

  render() {
    return (
      <div className="App">
        <Display displayValue={this.state.displayValue} />
        <ButtonTable 
        handleOperator={this.handleOperator} 
        operation={this.state.operation}
        waitingForNewValue={this.state.waitingForNewValue}
        handleClear={this.handleClear}
        handleAllClear={this.handleAllClear}
        handleNumberClick={this.handleNumberClick}
        handleEqual={this.handleEqual}
        handlePercent={this.handlePercent}
        handleDecimal={this.handleDecimal}
        />
      </div>
    );
  }
}

export default App;
