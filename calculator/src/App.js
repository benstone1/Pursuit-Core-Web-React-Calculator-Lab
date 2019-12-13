import React from "react";
import "./App.css";
import CalculatorForm from './components/CalculatorForm';
import Display from './components/DisplayResult'

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      displayValue: 0,
      input: '',
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      // result: 0,
      negative: false
    };

    this.state = this.initialState;
  }

  // previousValue = event => {};


  handleInput = event => {
    let { input } = this.state
    this.setState({
      // previousValue: this.state.displayValue,
      input: parseFloat(input += event.target.innerText)
    });
  };

  allClear = () => {
    this.setState(this.initialState);
  };

  handleOperationButton = e => {
    const { input } = this.state
    this.setState({
      operation: e.target.innerText,
      previousValue: parseFloat(input),

    });
    this.handleMath()
  };

  handleMath = () => {
    const { operation, previousValue } = this.state
    if (operation === "+") {
      this.setState({
        // previousValue: parseFloat(input),
        input: '',
      })
      return parseFloat(previousValue) + parseFloat(previousValue)
    }
  };

  showAnswer = e => {
    const { input, previousValue } = this.state

    this.setState({
      displayValue: parseFloat(previousValue) + parseFloat(input)
    });
  }

  //converts between negative nad positive
  handleConversion = e => {
    const { displayValue, negative } = this.state
    if (negative === false) {
      this.setState({
        displayValue: (Math.abs(displayValue) * -1),
        negative: true
      })
    } else {
      this.setState({
        displayValue: (Math.abs(displayValue)),
        negative: false
      })
    }
  }

  handleSubmit = event => event.preventDefault();

  render() {
    const { operation, displayValue, result } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <h1>Simple Calculator</h1>

        <div className='holder'>
          <Display
            displayValue={displayValue}
            result={result}
          />
          <CalculatorForm
            operation={operation}
            handleInput={this.handleInput}
            handleOperationButton={this.handleOperationButton}
            handleMath={this.handleMath}
            handleSubmit={this.handleSubmit}
            handleConversion={this.handleConversion}
            allClear={this.allClear}
            showAnswer={this.showAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;
