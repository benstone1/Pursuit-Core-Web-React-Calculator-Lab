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
      waitingForNewValue: false
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

handleEqual = (e) => {
  const {displayValue, previousValue, operation, waitingForNewValue} = this.state
  let counter;
// let result = parseInt(previousValue) + `${operation}` + parseInt(displayValue);


// console.log(result)
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
      />

</div>
  );
}
}

export default App;
