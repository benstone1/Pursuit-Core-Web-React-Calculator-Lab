import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      // waitingForNewValue: false,
      negative: false,
    }
  }


  handleFormSubmit = (event) => {
    event.preventDefault()
  }

  resetForm = (event) => {
    event.preventDefault()
    this.setState({
      displayValue: 0,
      previousValue: null,
      operation: null,
      // waitingForNewValue: false,
      negative: false,
    })

  }

  handleValue = (event) => {
    const { displayValue } = this.state
    let num = event.target.value 
    console.log(this.state.displayValue)
    // if(this.state.displayValue === 0){
      // console.log("It is zero")
      this.setState({

        displayValue: event.target.value 
      })
  
    // }
    // else{
    //   this.setState({

    //     displayValue: event.target.value + displayValue
    //   })
    // }

  
  }

  handleNegative = (event) => {
    const { displayValue, negative } = this.state
    console.log(event.target.value)
    console.log()
    if (negative === false) {
      this.setState({
        displayValue: displayValue * -1,
        negative: true

      })
    } else {
      this.setState({
        displayValue: displayValue * -1,
        negative: false

      })
    }
  }

  handleOperationWhenClicked = (event) => {
    const { operation, displayValue, previousValue } = this.state
    this.setState({
      operation: event.target.value,
      previousValue: displayValue,

    })
    if (this.state.operation === "+") {
      let additionValue = Number(displayValue) + Number(previousValue)

      this.setState({
        displayValue: additionValue,
        operation: null,
        negative: false,
      })
    } else if (this.state.operation === "-") {
      let subtractionValue = Number(displayValue) - Number(previousValue)
      this.setState({
        displayValue: subtractionValue,
        operation: null,
        negative: false,
      })
    } else if (operation === "*") {
      let multiplicationValue = Number(displayValue) * Number(previousValue)
      this.setState({
        displayValue: multiplicationValue,
        operation: null,
        negative: false,
      })
    } else if (this.state.operation === "/") {
      let DivisionValue = Number(displayValue) / Number(previousValue)
      this.setState({
        displayValue: DivisionValue,
        operation: null,
        negative: false,
      })
    }

  }

  handlePercentage = (event) => {
    const { displayValue } = this.state
    let percentage = Number(displayValue) / 100
    this.setState({
      displayValue: percentage
    })
  }

  handleDecimal = (event) => {
    let decimal = event.target.value
    const { displayValue } = this.state
    this.setState({
      displayValue: displayValue + decimal

    })
  }




  render() {
    let { displayValue, previousValue, operation, waitingForNewValue, negative } = this.state
    return (
      <div className="App" >
        <form
          onSubmit={this.handleFormSubmit}
          id="form" >

          <p className="button" id="valueDisplay" >{displayValue} </p>
          <button onClick={this.resetForm}
            value="AC" className="button" >AC</button>
          <button onClick={this.handlePercentage}
            value="%" className="button" id="percentage" >%</button>
          <button
            onClick={this.handleNegative}
            value={this.state.negative}
            className="button" >+/-</button>
          <button onClick={this.handleOperationWhenClicked}
            value="/" className="button" id="divide" >/</button>
          <button className="button"
            onClick={this.handleValue}
            value="7">7</button>
          <button className="button"
            onClick={this.handleValue}
            value="8">8</button>
          <button className="button"
            onClick={this.handleValue}
            value="9">9</button>
          <button
            onClick={this.handleOperationWhenClicked}
            value="*" className="button" id="multiply">*</button>
          <button className="button"
            onClick={this.handleValue}
            value="4">4</button>
          <button className="button"
            onClick={this.handleValue}
            value="5">5</button>
          <button className="button"
            onClick={this.handleValue}
            value="6">6</button>
          <button
            onClick={this.handleOperationWhenClicked}
            value="-" className="button" id="subtract" >-</button>
          <button className="button"
            onClick={this.handleValue}
            value="1">1</button>
          <button className="button"
            onClick={this.handleValue}
            value="2">2</button>
          <button className="button"
            onClick={this.handleValue}
            value="3">3</button>
          <button onClick={this.handleOperationWhenClicked}
            value="+"
            className="button" id="add" >+</button>
          <button className="button"
            onClick={this.handleValue}
            value="0" id="zero">0</button>
          <button
            onClick={this.handleDecimal}
            value="." className="button" >.</button>
          <button
            onClick={this.handleOperationWhenClicked}
            value="="
            className="button" id="equal">=</button>
        </form>
      </div>
    );
  }
}

export default App;
