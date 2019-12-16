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
      displayClear: 'AC'
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
  displayClear: 'C'
    })
}

handleDisplayOperation =(e) => {
const {displayValue, operation} = this.state
console.log(e.target.value)

let counter = 0;

if(operation === "%"){
  counter =  parseInt(displayValue) * 100
}
this.setState({
  displayValue:counter
})
}

handleEqual = (e) => {
  const {displayValue, previousValue, operation} = this.state
  let counter = 0
// let result = parseInt(previousValue) + `${operation}` + parseInt(displayValue);
// if(displayValue && operation && previousValue){
if(operation === "/"){
  counter = parseInt(previousValue) / parseInt(displayValue)
}else if(operation === "*"){
  counter = parseInt(previousValue) * parseInt(displayValue)
}else if(operation === ""){
  counter = parseInt(previousValue) - parseInt(displayValue)
}else if(operation === "+"){
  counter =  parseInt(previousValue) + parseInt(displayValue)
}
// }
this.setState({
  displayValue:counter
})
console.log(counter)
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
      handleDisplayOperation = {this.handleDisplayOperation}
      displayClear ={this.state.displayClear}
      handleReset = {this.handleReset}
      />

</div>
  );
}
}

export default App;
