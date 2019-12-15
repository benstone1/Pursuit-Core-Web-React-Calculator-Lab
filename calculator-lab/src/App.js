import React from 'react';
import Result from './Components/Result'
import Buttons from './Components/Buttons.jsx'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  componentDidMount(){
    console.log("component mounted")
  }

  // componentDidUpdate() {
  //   console.log("App component updated!!");
  // }

handleInput = (e) => {
//  console.log(e.target.value)
this.setState({
  displayValue: e.target.value
})
}

  render(){
  // const { displayValue } = this.state
  // console.log("state", {displayValue})
  return (

    <div className="App">
      <Buttons 
      displayValue = {this.state.displayValue}
      handleInput = {this.handleInput}  />

      <Result  
      displayValue = {this.state.displayValue} 
      previousValue = {this.state.previousValue}
      operation = {this.state.operation}
      waitingForNewValue = {this.state.waitingForNewValue}/>
</div>
  );
}
}

export default App;
