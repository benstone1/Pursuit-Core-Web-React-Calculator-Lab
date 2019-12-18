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
      calculationDone: false
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

  handleOperationClick = (e) => {
    const { operation, waitingForNewValue } = this.state

    let checkOperator = waitingForNewValue

    if (!operation) {
      checkOperator = true
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
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      calculationDone: true
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
          handleEqualClick={this.handleEqualClick} />
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