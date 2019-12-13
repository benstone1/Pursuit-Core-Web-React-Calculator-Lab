import React from 'react';
import './App.css';
import Calculator from './Components/buttons'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      method: null,
      display: 0
    }
  }
  allClearClick = () => {
    this.setState({
      num1: '',
      num2: '',
      display: 0,
      method: null
    })
  }
  clearClick = () => {
    let { num1 } = this.state;
    this.setState({
      num2: '',
      display: num1,
      method: null
    })
  }
  percentageClick = () => {
    let { num1, num2, method } = this.state;
    if (method === null) {
      this.setState({
        num1: num1 / 100,
        display: num1 / 100

      })
    } else {
      this.setState({
        num2: num2 / 100,
        display: num2 / 100
      })
    }
  }
  negateClick = () => {
    let { num1, num2, method } = this.state;
    if (method === null) {
      this.setState({
        num1: 0 - num1,
        display: 0 - num1
      })
    } else {
      this.setState({
        num2: 0 - num2,
        display: 0 - num2
      })
    }
  }
  addClick = () => {
    this.setState({
      method: 'addition'
    })
  }
  subClick = () => {
    this.setState({
      method: 'subtraction',

    })
  }
  divClick = () => {
    this.setState({
      method: 'division',

    })
  }
  mulClick = () => {
    this.setState({
      method: 'multiplication',

    })
  }
  equalsClick = () => {
    let { num1, num2, method } = this.state
    if (method === 'addition') {
      this.setState({
        display: Number(num1) + Number(num2),
        method: null
      })
    } else if (method === 'subtraction') {
      this.setState({
        display: Number(num1) - Number(num2),
        method: null
      })
    } else if (method === 'multiplication') {
      this.setState({
        display: Number(num1) * Number(num2),
        method: null
      })
    } else {
      if (Number(num2) === 0) {
        this.setState({
          display: 'ERROR',
          method: null
        })
      }
      else {
        this.setState({
          display: Number(num1) / Number(num2),
          method: null
        })
      }
    }
  }

  numberClick = (element) => {
    let { num1, num2, method } = this.state;
    if (method === null) {
      this.setState({
        num1: num1 + element.target.value,
        display: num1 + element.target.value
      })
    } else {
      this.setState({
        num2: num2 + element.target.value,
        display: num2 + element.target.value
      })
    }
  }

  render() {
    let { display, method } = this.state
    return (
      <div className="App">
        <Calculator
          display={display}
          method={method}
          numberClick={this.numberClick}
          equalsClick={this.equalsClick}
          mulClick={this.mulClick}
          addClick={this.addClick}
          subClick={this.subClick}
          divClick={this.divClick}
          negateClick={this.negateClick}
          percentageClick={this.percentageClick}
          clearClick={this.clearClick}
          allClearClick={this.allClearClick}
        />
      </div>
    );
  }
}

export default App;
