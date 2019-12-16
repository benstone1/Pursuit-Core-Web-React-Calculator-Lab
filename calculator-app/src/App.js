import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';

class App extends React.Component {
  constructor() {
    super(); 
     this.state = {
        displayValue: '0',
        previousValue: null,
        operation: null,
        waitingForNewValue: false
      }
  }

  handleInput = (event) => {
    this.setState({
      displayValue: event.target.value
    })
  }

  handleOperation = (event) => {
    const {displayValue} = this.state
    this.setState({
      operation: event.target.value,
      previousValue: displayValue,
      waitingForNewValue: true
    })
  }

  handleDisplayOperation = (event) => {
    console.log('adding clearing')
  }

  handleEqual = (event) => {
    console.log('getting result')
    const {displayValue, previousValue, operation, waitingForNewValue} = this.state
    let counter = 0;
  }

  render() {
    const {displayValue, previousValue, operation, waitingForNewValue, 
      handleInput, handleOperation, handleDisplayOperation, handleEqual} = this.state
    return (
    <div className="App">
      <Buttons
      displayValue = {displayValue}
      previousValue = {previousValue}
      operation = {operation}
      waitingForNewValue = {waitingForNewValue}
      handleInput = {handleInput}
      handleOperation = {handleOperation}
      handleDisplayOperation = {handleDisplayOperation}
      handleEqual = {handleEqual}
      />
    </div>
  );
  }
}

export default App;
