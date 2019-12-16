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
      waitingForNewValue: false,
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
let str = " "
this.setState({
  displayValue: e.target.value
})
}

handleOperation = (e) => {
  const {displayValue} = this.state
  this.setState({
  operation: e.target.value,
  previousValue: displayValue,
  waitingForNewValue: true,
  displayClear: 'C',
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



handleEqual = (e) => {
  const {displayValue, previousValue, operation} = this.state
  let counter = 0

if(operation === "/"){
  counter = Number(previousValue) / Number(displayValue)
}else if(operation === "*"){
  counter = Number(previousValue) * Number(displayValue)
}else if(operation === ""){
  counter = Number(previousValue) - Number(displayValue)
}else if(operation === "+"){
  counter =  Number(previousValue) + Number(displayValue)
}
this.setState({
  displayValue:counter
})
// console.log(counter)
}

handleReset = (e) => {
  console.log(e.target.value)
  Buttons.innerText=
    this.setState =({
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false,
      displayClear: 'AC'
    })
  
}

  render(){
  // const { displayValue } = this.state
  // console.log("state", {displayValue})
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
      />

</div>
  );
}
}

export default App;
