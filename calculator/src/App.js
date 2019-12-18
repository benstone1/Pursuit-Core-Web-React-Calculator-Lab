import React from 'react';
import Calculator from './Components/calculator'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      calculationDone: false,
      negativeNum: false,
      postiveNum: true
    }
  }

  handleKeyClick = (e) => {
    const { displayValue, waitingForNewValue, previousValue, calculationDone } = this.state
    let previousNumber = displayValue
    let result = displayValue
    let lastNumbers = previousValue
    let checkOperator = waitingForNewValue

    console.log('Check Operator', checkOperator)
    console.log('Check Calculation', calculationDone)


    if (calculationDone === true) {
      result = e.target.value
      console.log("HIT")
    } else {

      if (previousNumber === "0" && checkOperator === false) {
        result = e.target.value
      } else if (checkOperator === false) {
        result = previousNumber + e.target.value
      }

      if (checkOperator) {
        lastNumbers = displayValue
        console.log('Lastnumber', lastNumbers)
        result = e.target.value
        checkOperator = false
      }
    }
    this.setState({
      displayValue: result,
      previousValue: lastNumbers,
      waitingForNewValue: checkOperator,
      calculationDone: false
    })
  }

  handlePlusMinus = () => {
    const { displayValue } = this.state
    let postiveOrNegative = displayValue.includes('-')
    let action = null
    
    if (postiveOrNegative) {
      action = displayValue.slice(1)
      console.log("Negative there????", action);

    } else {
      action = '-' + displayValue
      console.log("Negative there?", action);
    }
    this.setState({
      displayValue: action
    })
  }

  handlePercent = () => {
    const { displayValue } = this.state

    let percentNumber = `${Number(displayValue / 100)}`

    this.setState({
      displayValue: percentNumber
    })
  }

  handleOperationClick = (e) => {
    const { operation, waitingForNewValue } = this.state

    let checkOperator = waitingForNewValue

    if (!operation) {
      checkOperator = true
      document.getElementById("all-clear").style.visibility = "Hidden";
      document.getElementById("clear").style.visibility = "visible";

    }

    this.setState({
      operation: e.target.value,
      waitingForNewValue: checkOperator
    })
  }

  handleEqualClick = () => {
    const { displayValue, previousValue, operation } = this.state

    //FINISHED This thought: decide how to bring the operator here. it's being set to null after a 2nd set of numbers is being clicked
    let result = displayValue
    let lastNumber = previousValue
    document.getElementById("all-clear").style.visibility = "visible";
    document.getElementById("clear").style.visibility = "hidden";

    if (operation === "+") {
      result = `${Number(displayValue) + Number(previousValue)}`
      console.log("Total", result)
    } else if (operation === "÷") {
      result = `${Number(previousValue) / Number(displayValue)}`

    } else if (operation === "-") {
      result = `${Number(previousValue) - Number(displayValue)}`

    } else if (operation === "x") {
      result = `${Number(previousValue) * Number(displayValue)}`
    }

    this.setState({
      displayValue: result,
      previousValue: result,
      operation: null,
      waitingForNewValue: false,
      calculationDone: true
    })
  }

handleClear = () => {
  this.setState({
    displayValue: "0",
  })
}

  handleAllClear = () => {
    this.setState({
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      calculationDone: false
    })
  }

  render() {
    const { displayValue, previousValue, operation, waitingForNewValue } = this.state

    return (
      <div className="App">

        <Calculator
          displayValue={displayValue}
          previousValue={previousValue}
          operation={operation}
          waitingForNewValue={waitingForNewValue}
          handleKeyClick={this.handleKeyClick}
          handleOperationClick={this.handleOperationClick}
          handleEqualClick={this.handleEqualClick}
          handlePlusMinus={this.handlePlusMinus}
          handlePercent={this.handlePercent}
          handleClear={this.handleClear}
          handleAllClear={this.handleAllClear} />
      </div>
    );
  }
}

export default App;




// this.operations = {
//   "+": (x, y) => Number(x) + Number(y),
//   "-": (x, y) => Number(x) - Number(y),
//   "x": (x, y) => Number(x) * Number(y),
//   "÷": (x, y) => Number(x) / Number(y),
// }
// this.nonOps = {
//   'AC': (display) => {return {display: 0, operation: null, hold: null}},
//   '%': (display) => {return {display: Number(display) / 100}},
//   '±': (display) => {return {display: Number(display) * -1}},
//   '.': (display) => {return {display: display.toString().includes('.') ? display : display + '.'}},
// }