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
      previousValue: null,
      operation: null,
      waitingForNewValue: false
      // operationOnDeck: "",
      //     activeEntry: 0
    };
    this.state = this.initialState;
  }

  componentDidUpdate = () => {
    const { displayValue } = this.state;

    if (this.getFullLength(displayValue) > 12) {
      const lastResort = parseFloat(displayValue.toFixed(9));
      this.setState({
          displayValue: this.getFullLength(lastResort) > 12 ? 'ERROR' : lastResort
      });
    }

    if (displayValue === 0) {
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
    const { displayValue } = this.state;
    const button = e.target.name;
    
    if (button === 'AC') {
      return this.setState(this.initialState);
    }
    
    if (displayValue !== 'ERROR') {
      if (!isNaN(button)) {
        if (this.isDisplayNotFull()) {                                                        // prevent length > 10
          this.setState({
              displayValue: displayValue === '0' ? button : displayValue + button  // special zero treatment
          });
        }
      } else if (button === '±') {
        this.setState({
            displayValue: displayValue[0] === '-' ? displayValue.slice(1) : '-' + displayValue
        });
      } else if (button === '.' && !displayValue.includes('.')) {
        this.setState({
            displayValue: displayValue + '.'
        });
      } else if (button === '%' && parseFloat(displayValue) !== 0) {
        this.setState({
            displayValue: displayValue / 100
        });
      }
    }
    
    // console.log(this.countDigits());
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
