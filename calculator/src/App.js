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
      negative: false,
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
    }

    if (storage !== '') {
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
    const { operation, previousValue, input } = this.state

    switch (operation) {
      case "÷":
        this.setState({
          displayValue: parseFloat(previousValue) / parseFloat(input),
          input: '',
        })
        break;
      case "+":
        this.setState({
          displayValue: parseFloat(previousValue) + parseFloat(input),
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
            handleOperationButton={this.handleOperationButton}
            handleMath={this.handleMath}
            handleSubmit={this.handleSubmit}
            handleConversion={this.handleConversion}
            showAnswer={this.showAnswer}
            percentage={this.percentage}
            clear={this.clear}
            clearType={clearType}
          />
        </div>
      </div>
    );
  }
}

export default App;
