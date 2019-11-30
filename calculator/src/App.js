import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
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
    const { operation } = this.state;

    console.log(this.state);

    return (
      <div className="App">
        <h1>Simple Calculator</h1>
        <div className="display"></div>
        <form onSubmit={this.handleSubmit}>
          <div className="calc">
            <div className="buttons">
              <button className="button col-3" onClick={this.allClear}>
                AC
              </button>
              <button
                className="button col-3"
                onClick={this.handleOperation}
                value={operation}
              >
                %
              </button>
              <button className="button col-3" onClick={this.handleOperation}>
                ±
              </button>
              <button
                className="button col-3 orange"
                onClick={this.handleOperation}
              >
                ÷
              </button>
              <button onClick={this.handleInput} className="button col-3">
                7
              </button>
              <button onClick={this.handleInput} className="button col-3">
                8
              </button>
              <button onClick={this.handleInput} className="button col-3">
                9
              </button>
              <button
                className="button col-3 orange"
                onClick={this.handleOperation}
              >
                x
              </button>
              <button onClick={this.handleInput} className="button col-3">
                4
              </button>
              <button onClick={this.handleInput} className="button col-3">
                5
              </button>
              <button onClick={this.handleInput} className="button col-3">
                6
              </button>
              <button
                className="button col-3 orange"
                onClick={this.handleOperation}
              >
                -
              </button>
              <button onClick={this.handleInput} className="button col-3">
                1
              </button>
              <button onClick={this.handleInput} className="button col-3">
                2
              </button>
              <button onClick={this.handleInput} className="button col-3">
                3
              </button>
              <button
                className="button col-3 orange"
                onClick={this.handleOperation}
                value={operation}
              >
                +
              </button>
              <button onClick={this.handleInput} className="button col-6">
                0
              </button>
              <button
                className="button col-3 orange"
                onClick={this.handleOperation}
              >
                =
              </button>
              <button className="button col-3" onClick={this.handleOperation}>
                .
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
