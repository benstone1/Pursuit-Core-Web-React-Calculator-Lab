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
     waitingForNewValue: false
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


  handleNumbers = (e) => {
    const number  = e.target.name
    this.setState({
        display: e.target.value + number
    })  
    
  }

  handleOperation = (e) => {
    const operator = e.target.name

  //   if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {

  //   }
  //  this.setState({
  //   //  previousValue: 
  //    display: 
  //  })

  
  
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
