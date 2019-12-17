import React from 'react';
// import Result from './Components/Result'
import Buttons from './Components/Buttons.jsx'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      displayValue: "0",
      previousValue: null,
      operation: null,
      // waitingForNewValue: false,
      displayClear: 'AC',
      neagative:false
    }
  }

  componentDidMount(){
    console.log("component mounted")
  }

  componentDidUpdate() {
    console.log("App component updated!!");
  }

handleInput = (e) => {
//  console.log(e.target.value)
let {displayValue, operation, waitingForNewValue} = this.state
// let str = " "
this.setState({
  displayValue: Number(displayValue += e.target.value),
})
if(!operation){
  // console("hitting function" + e.target.value)
  this.setState({
    // waitingForNewValue: true,
    displayClear: 'C',
    
  })
}
}

handleOperation = (e) => {
  const {displayValue} = this.state
  this.setState({
  operation: e.target.value,
  previousValue: displayValue,
  waitingForNewValue: true,
  displayClear: 'C',
  displayValue: " "
    })
}

handlePercent = (e) => {
const {displayValue } = this.state
console.log(e.target.value)
  let result =  Number(displayValue) / 100
this.setState({
  displayValue:result
})
}

handleNegativePositive = (e) => {
  const {displayValue} = this.state
  if(displayValue){
    this.setState({
      neagative: true,
      displayValue: -displayValue
    })
  }
}

handleDecimal = (e) => {
  const {displayValue} = this.state
  if (displayValue.toString().includes(".")){
    this.setState({
      displayValue: displayValue,
    })
  }else{
    this.setState({
      displayValue: displayValue + "."
    })
  }
  // console.log("hello")
}

handleMath=(e) => {
  const {displayValue, previousValue, operation} = this.state
  let counter = 0

if(operation === "/"){
  counter = Number(previousValue) / Number(displayValue)
  this.setState({
    displayValue:counter
  })
}   else if(operation === "*"){
  counter = Number(previousValue) * Number(displayValue)
  this.setState({
    displayValue:counter
  })
}else if(operation === "-"){
  counter = Number(previousValue) - Number(displayValue)
  this.setState({
    displayValue:counter
  })
}else if(operation === "+"){
  counter =  Number(previousValue) + Number(displayValue)
  this.setState({
    displayValue:counter
  })
}
this.setState({
  displayValue:counter
})
console.log(counter)
}

handleEqual = (e) => {
  this.handleMath()
}

handleReset = (e) => {
  console.log(e.target.value)
  Buttons.innerText=
    this.setState ({
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      displayClear: 'AC'
    })
  
}

  render(){
  // const { displayValue } = this.state
  console.log("state", this.state)
  return (
    <div className="App">
      <Buttons 
      displayValue = {this.state.displayValue}
      handleInput = {this.handleInput}
      handleOperation = {this.handleOperation}
      handleEqual = {this.handleEqual}
      handlePercent= {this.handlePercent}
      displayClear ={this.state.displayClear}
      handleReset = {this.handleReset}
      handleNegativePositive = {this.handleNegativePositive}
      handleDecimal = {this.handleDecimal}
      />

</div>
  );
}
}

export default App;
