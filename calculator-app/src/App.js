import React from 'react';
import './App.css';

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
        
      </div>
    )
  }   
}

export default App;
