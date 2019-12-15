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
      clear: false,
      clearType: 'AC',
      storage: ''
    };
    this.state = this.initialState;
  }

  showAnswer = e => {
    const { input, displayValue } = this.state

    if (input === '') {
      this.setState({
        previousValue: displayValue,
        input: 0,
      });
    } else {
      this.handleOperationButton(e)
      this.handleMath()
    }

  }

  handleInput = event => {
    let { input, waitingForNewValue, displayValue, storage } = this.state
    this.setState({
      input: parseFloat(input += event.target.innerText),
      displayValue: parseFloat(input)
    });


    if (waitingForNewValue) {
      this.setState({
        previousValue: displayValue,
        clear: true,
        clearType: 'C'
      })
    } else if (storage !== '') {
      this.setState((prevState) => {
        return {
          previousValue: storage,
          storage: ''
        }
      })
    }

  };

  clear = () => {
    const { clear } = this.state
    clear ? this.setState((prevState) => {
      return {
        displayValue: 0,
        input: '',
        storage: prevState.previousValue
      }
    }) : this.setState(this.initialState);
  }

  handleOperationButton = e => {
    const { input, waitingForNewValue, displayValue, clear } = this.state;
    const value = e.target.value;
    waitingForNewValue ? this.setState({
      operation: value,
      previousValue: parseFloat(displayValue),
      input: '',
    }) : this.setState({
      operation: value,
      previousValue: parseFloat(input),
      input: '',
      waitingForNewValue: true,
    });

    clear ? this.setState({
      clear: false,
      clearType: 'AC'
    }) : this.setState({
      clear: true,
      clearType: 'C'
    })


  };

  handleMath = () => {
    const { operation, previousValue, input, displayValue } = this.state

    switch (operation) {
      case "÷":
        this.setState({
          displayValue: parseFloat(previousValue) / parseFloat(displayValue),
          input: '',
        })
        break;
      case "+":
        this.setState({
          displayValue: parseFloat(previousValue) + parseFloat(displayValue),
          input: '',
        })
        break;
      case "-":
        this.setState({
          displayValue: parseFloat(previousValue) - parseFloat(input),
          input: '',
        })
        break;
      case "x":
        this.setState({
          displayValue: parseFloat(previousValue) * parseFloat(input),
          input: '',
        })
        break;
      default:
        this.setState({
          input: '',
        })
        break;
    }

  };

  //converts between negative and positive
  handleConversionOps = e => {
    const { displayValue, input, waitingForNewValue } = this.state


    switch (e.target.value) {
      case "%":
        this.setState({
          displayValue: parseFloat(displayValue) / 100,
          input: '',
        })
        break;
      case "±":
        this.setState({
          displayValue: (displayValue) * -1,
          input: (displayValue) * -1,
        })
        break;
      case ".":
        this.setState({
          input: displayValue + '.',
          displayValue: input,
        })
        break;
      default:
        this.setState({
          input: '',
        })
        break;
    }
  }

  handleSubmit = event => event.preventDefault();

  render() {
    const { displayValue, result, clearType } = this.state;

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
            handleSubmit={this.handleSubmit}
            handleConversionOps={this.handleConversionOps}
            showAnswer={this.showAnswer}
            clear={this.clear}
            clearType={clearType}
          />
        </div>
      </div>
    );
  }
}

export default App;
