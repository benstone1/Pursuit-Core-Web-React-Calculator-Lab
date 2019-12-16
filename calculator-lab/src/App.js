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
      displayOperation: null
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
  waitingForNewValue: true
    })
}

handleDisplayOperation =(e) => {
console.log(e.target.value)
}

handleEqual = (e) => {
  const {displayValue, previousValue, operation, waitingForNewValue} = this.state
  let counter;
// let result = parseInt(previousValue) + `${operation}` + parseInt(displayValue);
if(operation === "/"){
  counter = parseInt(previousValue) / parseInt(displayValue)
}else if(operation === "*"){
counter = parseInt(previousValue) * parseInt(displayValue)
}else if(operation === ""){
  counter = parseInt(previousValue) - parseInt(displayValue)
}else if(operation === "+"){
  counter = parseInt(previousValue) + parseInt(displayValue)
}else if(operation === "%"){
  counter = parseInt(previousValue) * 100
}
console.log(counter)
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
      />

</div>
  );
}
}

export default App;
