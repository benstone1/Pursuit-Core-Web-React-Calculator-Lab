import React from 'react';
import Calculator from './Components/Calculator'
import './App.css';


class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     display: '',
     newValue: null,
     previousValue: null,
     decimal: false,
     operation: null,
     waitingForNewValue: false,
    name:''
    // num: '',
    // displayValue: ''
    }
 }

  handleACButton = () => {
   this.setState({
     display: '',
     previousValue: null,
     decimal: false,
     operation: null,
     waitingForNewValue: false,
      
   })
  }

  // handleClick = (e) => {
  //   // const{ name} = this.state
  //   this.setState({
  //     display:this.state.display
  //   })
  //   console.log('button has been clicked', this.state.display)
  // }

  handleNumbers = (e) => {
   
      this.setState({
        display: e.target.name
      })
     
  //  } 
    
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
    const {display, displayValue} = this.state
    return(
      <div className='App'>
        <Calculator
          display= {display}
          displayValue = {displayValue}
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
