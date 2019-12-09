import React from "react";
import "./App.css";
import CalculatorForm from './components/CalculatorForm';
import Display from './components/DisplayResult'

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      result: 0
    };

    this.state = this.initialState;
  }

  // previousValue = event => {};


  handleInput = event => {
    this.setState({
      previousValue: this.state.displayValue,
      displayValue: parseFloat(event.target.innerText)
    });
  };

  allClear = () => {
    this.setState(this.initialState);
  };

  handleOperation = event => {
    this.ops();

    this.setState({
      operation: event.target.innerText
      // displayValue: this.ops()
    });
  };

  ops = () => {
    const { operation, displayValue, previousValue } = this.state;

    if (operation === "+") {
      this.setState({
        displayValue: previousValue + displayValue
      });
    }
  };

  handleSubmit = event => event.preventDefault();

  render() {
    const { operation, displayValue } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <h1>Simple Calculator</h1>

        <CalculatorForm
          operation={operation}
          handleInput={this.handleInput}
          handleOperation={this.handleOperation}
          handleSubmit={this.handleSubmit}
        />

        <Display displayValue={displayValue} />
      </div>
    );
  }
}

export default App;
