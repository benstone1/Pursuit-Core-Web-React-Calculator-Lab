import React from 'react';
import Calculator from './Components/Calculator'
import './App.css';


class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     display: '0',
     newValue: null,
     previousValue: null,
     decimal: false,
     operation: null,
     waitingForNewValue: false,
    //  name: this.props.name
    num: ''
    }
 }

  handleACButton = () => {
   this.setState({
     display: 0,
     previousValue: null,
     decimal: false,
     operation: null,
     waitingForNewValue: false,
      
   })
  }

  handleClick = (e) => {
    // const{ name} = this.state
    this.setState({
      display: e.target.value
    })
    console.log('button has been clicked', e.target.value)
  }

  handleNumbers = (num) => {
    const {waitingForNewValue} = this.state
   if (waitingForNewValue) {
      this.setState({
        display: Number(num),
        waitingForNewValue: false
      })
   } 
    this.setState({
      // display: display='0'
    })
  }

  handleOperation = () => {
    const{previousValue, newValue} = this.state

    const add = previousValue + newValue;
    const mul= previousValue * newValue;
    const div = previousValue / newValue;
    const sub = previousValue - newValue
    this.setState({
      add: add,
      mul: mul,
      div: div,
      sub: sub
    })
  }

  handlePercentage = (num) => {
   
   const percent = (num / 100)
   this.setState({
    num: percent
   })
   console.log('percentage btn', percent)
 }

  // handleNegAndPos = () => {

  // }

  // handleEqualSign = () => {

  // }

  // handleDecimal = () => {

  // }

  render() {
    const {display} = this.state
    return(
      <div className='App'>
        <Calculator
          display= {display}
          handleACButton={this.handleACButton}
          handleDecimal={this.handleDecimal}
          handleEqualSign={this.handleEqualSign}
          handleNegAndPos= {this.handleNegAndPos}
          handleNumbers={this.handleNumbers}
          handleOperation={this.handleOperation}
          handlePercentage={this.handlePercentage}
        />
      </div>
    )
  }
}

  



export default App;
