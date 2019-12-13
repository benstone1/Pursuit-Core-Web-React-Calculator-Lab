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
      negative: false
    };

    this.state = this.initialState;
  }

  handleInput = event => {
    let { input } = this.state
    this.setState({
      input: parseFloat(input += event.target.innerText),
      displayValue: input
    });
  };

  allClear = () => this.setState(this.initialState);
  clear = () => {
    this.setState({
      displayValue: 0,
      input: ''
    })
  }


  handleOperationButton = e => {
    const { input, waitingForNewValue, displayValue } = this.state;
    const value = e.target.value;

    waitingForNewValue ? this.setState({
      ...this.prevState,
      operation: value,
      previousValue: parseFloat(displayValue),
      input: ''
    }) : this.setState({
      ...this.prevState,
      operation: value,
      previousValue: parseFloat(input),
      input: '',
      waitingForNewValue: true
    });
  };

  handleMath = () => {
    const { operation, previousValue, input } = this.state
    if (operation === "÷") {
      this.setState({
        displayValue: parseFloat(previousValue) / parseFloat(input),
        input: '',
      })
    } else if (operation === "+") {
      this.setState({
        displayValue: parseFloat(previousValue) + parseFloat(input),
        input: '',
      })
    }
  };

  showAnswer = e => this.handleMath()

  percentage = e => {
    const { displayValue } = this.state
    this.setState({
      displayValue: parseFloat(displayValue) / 100,
      input: '',
    })
  }

  //converts between negative and positive
  handleConversion = e => {
    const { displayValue, negative } = this.state
    if (negative === false) {
      this.setState({
        displayValue: (Math.abs(displayValue) * -1),
        input: (Math.abs(displayValue) * -1),
        negative: true
      })
    } else {
      this.setState({
        displayValue: (Math.abs(displayValue)),
        input: (Math.abs(displayValue)),
        negative: false
      })
    }
  }

  handleSubmit = event => event.preventDefault();

  render() {
    const { displayValue, result } = this.state;

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
            handleInput={this.handleInput}
            handleOperationButton={this.handleOperationButton}
            handleMath={this.handleMath}
            handleSubmit={this.handleSubmit}
            handleConversion={this.handleConversion}
            allClear={this.allClear}
            showAnswer={this.showAnswer}
            percentage={this.percentage}
            clear={this.clear}
          />
        </div>
      </div>
    );
  }
}

export default App;
