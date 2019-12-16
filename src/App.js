/*
Joseph P. Pasaoa
APP | React Calculator Lab
*/


/* IMPORTS */
import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Console from './components/Console';


/* MAIN */
class App extends Component {
  constructor() {
    super();
    this.initialState = {
      displayValue: '0',
      residualValue: null,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
      // operationOnDeck: "",
      //     activeEntry: 0
    };
    this.state = this.initialState;
    this.ops = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "x": (a, b) => a * b,
      "÷": (a, b) => b !== 0 ? a / b : 'ERROR'
    };
    this.executes = {

    }
  }

  componentDidUpdate = () => {
    const { displayValue } = this.state;

    if (this.getFullLength(displayValue) > 12) {
      const lastResort = parseFloat(displayValue.toFixed(9));
      this.setState({
          displayValue: this.getFullLength(lastResort) > 12 ? 'ERROR' : lastResort
      });
    }

    if (displayValue === 0) {     // for those really small numbers that js rounds to Number 0
      this.setState({
          displayValue: 'ERROR'
      });
    }
  }

  getFullLength = (input) => {
    return input.toString().split('').length;
  }

  isDisplayNotFull = () => {
    const chars = this.state.displayValue.toString().split('');
    return chars.filter(char => !isNaN(char)).length < 10;
  }

  handleClicks = (e) => {
    const { displayValue, residualValue, previousValue, operation, waitingForNewValue } = this.state;
    const button = e.target.name;

    // CAN ALWAYS RESET
    if (button === 'AC') {
      return this.setState(this.initialState);
    }

    if (displayValue === 'ERROR') {
      return;
    }
    // // //
    
    // INPUT EQUALS
    if (button === '=') {
      if (previousValue !== null && operation) {
        const result = this.ops[operation](previousValue, residualValue || parseFloat(displayValue));
        this.setState({
            displayValue: result.toString(),
            residualValue: !residualValue ? parseFloat(displayValue) : residualValue,
            previousValue: result,
            waitingForNewValue: true
        });
      }
    }
    // // //

    // INPUT OPERATION
    if (this.ops[button]) {
      this.setState({
        residualValue: null
      });

      if (waitingForNewValue) {
        return this.setState({ operation: button });
      }
      // //
      if (previousValue !== null) {
        const currentValue = parseFloat(displayValue);
        const result = this.ops[operation](previousValue, currentValue);
        this.setState({
            displayValue: result.toString(),
            residualValue: currentValue,
            previousValue: result
        });
      } else {
        this.setState({ previousValue: parseFloat(displayValue) });
      }
      return this.setState({
          operation: button,
          waitingForNewValue: true
      });
    }
    // // //

    // INPUT NUMBER
    if (!isNaN(button)) {
      if (waitingForNewValue) {
        return this.setState({
            displayValue: button,
            residualValue: null,
            waitingForNewValue: false
        });
      }
      // //

      if (this.isDisplayNotFull()) {                                              // prevent length > 10
        return this.setState({
            displayValue: displayValue === '0' ? button : displayValue + button   // special zero treatment
        });
      }
    }
    // // //
    
    // INPUT POSITIVE/NEGATIVE
    if (button === '±') {
      return this.setState({
          displayValue: displayValue[0] === '-' ? displayValue.slice(1) : '-' + displayValue
      });
    }
    // // //
    
    // INPUT DECIMAL POINT
    if (button === '.' && !displayValue.includes('.')) {
      return this.setState({
          displayValue: displayValue + '.'
      });
    }
    // // //

    // INPUT PERCENTAGE
    if (button === '%' && parseFloat(displayValue) !== 0) {
      return this.setState({
          displayValue: displayValue / 100
      });
    }

  // // // //
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div className="App">
        <Display 
          displayValue={displayValue} />
        <Console 
          handleClicks={this.handleClicks} />
      </div>
    );
  }
}


/* EXPORT */
export default App;
