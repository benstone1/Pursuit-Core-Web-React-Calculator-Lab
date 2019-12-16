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
    };
    this.state = this.initialState;
    this.ops = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "x": (a, b) => a * b,
      "÷": (a, b) => b !== 0 ? a / b : 'ERROR'
    };
  }

  componentDidUpdate = () => {
    const { displayValue } = this.state;

    if (this.getCurrTotalLength(displayValue) > 12 || this.getCurrDigitLength(displayValue) > 10) {
      const lastResort = parseFloat(Number(displayValue).toFixed(9));
      const fixed = !(this.getCurrTotalLength(lastResort) > 12) && !(this.getCurrDigitLength(lastResort) > 10);
      this.setState({
          displayValue: fixed ? lastResort : 'ERROR'
      });
    }

    if (displayValue === 0) {     // for those really small numbers that js rounds to Number 0
      this.setState({
          displayValue: 'ERROR'
      });
    }
  }

  getCurrTotalLength = (input) => {
    return input.toString().split('').length;
  }

  getCurrDigitLength = (input) => {
    const chars = input.toString().split('');
    return chars.filter(char => !isNaN(char)).length;
  }

  handleClicks = (e) => {
    const { displayValue, residualValue, previousValue, operation, waitingForNewValue } = this.state;
    const button = e.target.name;

    // CAN ALWAYS RESET
    if (button === 'AC') {
      return this.setState(this.initialState);
    }

    if (button === 'C') {
      return this.setState({ displayValue: '0' });
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

      if (this.getCurrDigitLength(displayValue) < 10) {                           // prevent length > 10
        return this.setState({
            displayValue: displayValue === '0' ? button : displayValue + button   // special zero treatment
        });
      }
    }
    // // //
    
    // INPUT POSITIVE/NEGATIVE
    if (button === '±' && displayValue !== '0') {
      return this.setState({
          displayValue: displayValue[0] === '-' ? displayValue.slice(1) : '-' + displayValue
      });
    }
    // // //
    
    // INPUT DECIMAL POINT
    if (button === '.') {
      if (waitingForNewValue) {
        return this.setState({
            displayValue: '0.',
            waitingForNewValue: false
        });
      }
      // // //
      if (!displayValue.includes('.')) {
        return this.setState({
            displayValue: displayValue + '.'
        });
      }
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
    const { displayValue, operation, waitingForNewValue } = this.state;
    return (
      <div className="App">
        <Display 
          displayValue={displayValue} 
          operation={operation} 
          />
        <Console 
          displayValue={displayValue} 
          waitingForNewValue={waitingForNewValue} 
          handleClicks={this.handleClicks} 
        />
      </div>
    );
  }
}


/* EXPORT */
export default App;
