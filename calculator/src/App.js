import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      displayValue: '0',
      previousValue: null,
      operator: null,
      waitingForNewValue: false,
      hasDot: false,
      equalLock: false
    }
  }
  clickAC = () => {
    this.setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      hasDot: false
    })
  }

  clickPercentage = () => {
    let newValue = `${this.state.displayValue / 100}`
    this.setState({
      displayValue: newValue
    })
  }

  clickInvert = () => {
    let newValue = `${this.state.displayValue * -1}`
    this.setState({
      displayValue: newValue
    })
  }

  clickNum = (event) => {
    if (this.state.displayValue === '0' || this.state.waitingForNewValue === true) {
      this.setState({
        displayValue: event.target.innerText,
        waitingForNewValue: false
      })
    } else {
      let newValue = `${this.state.displayValue}` + `${event.target.innerText}`
      this.setState({
        displayValue: newValue
      })
    }
  }

  clickDot = (event) => {
    if (this.state.hasDot === false) {
      let newValue = `${this.state.displayValue}` + `${event.target.innerText}`
      this.setState({
        displayValue: newValue,
        hasDot: true
      })
    }
  }

  clickOperator = (event) => {
    this.setState({
      operator: event.target.innerText,
      previousValue: this.state.displayValue,
      waitingForNewValue: true,
      equalLock: false
    })
  }

  clickEqual = () => {
    if (this.state.equalLock === true) {
      let result = eval(`${this.state.displayValue} ${this.state.operator} ${this.state.previousValue}`)
      this.setState({
        displayValue: result,
        waitingForNewValue: true
      })
    } else {
      let newValue = this.state.displayValue
      let result = eval(`${this.state.previousValue} ${this.state.operator} ${this.state.displayValue}`)
      this.setState({
        previousValue: newValue,
        displayValue: result,
        equalLock: true
      })
    }
  }

  render() {
    const { displayValue } = this.state
    return (
      <div className="App">
        <div className='display'>{displayValue} </div>
        <button className='button' onClick={this.clickAC}>AC</button>
        <button className='button' onClick={this.clickPercentage}>%</button>
        <button className='button' onClick={this.clickInvert}>+-</button>
        <button className='orange' onClick={this.clickOperator}>/</button>
        <button className='button' onClick={this.clickNum}>1</button>
        <button className='button' onClick={this.clickNum}>2</button>
        <button className='button' onClick={this.clickNum}>3</button>
        <button className='orange' onClick={this.clickOperator}>*</button>
        <button className='button' onClick={this.clickNum}>4</button>
        <button className='button' onClick={this.clickNum}>5</button>
        <button className='button' onClick={this.clickNum}>6</button>
        <button className='orange' onClick={this.clickOperator}>-</button>
        <button className='button' onClick={this.clickNum}>7</button>
        <button className='button' onClick={this.clickNum}>8</button>
        <button className='button' onClick={this.clickNum}>9</button>
        <button className='orange' onClick={this.clickOperator}>+</button>
        <button className='button' id='zero' onClick={this.clickNum}>0</button>
        <button className='button' onClick={this.clickDot}>.</button>
        <button className='orange' onClick={this.clickEqual}>=</button>
      </div>
    )
  }
}

export default App;
