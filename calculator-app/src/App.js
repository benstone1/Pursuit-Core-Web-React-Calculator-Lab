import React from 'react';
import './App.css';
import Button from './Components/Button'
import Keypad from './Components/Keypad'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  render(){
    return (
      <div className="App">
       <Keypad />
      </div>
    )
  }   
}

export default App;
