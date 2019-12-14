import React from 'react';
import Result from './Components/Result'
import Buttons from './Components/Buttons'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  
  render(){
  return (
    <div className="App">
      <h1> Simple Calculator</h1>
      <Buttons />
    </div>
  );
}
}

export default App;
