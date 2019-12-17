import React from 'react';
import Calculator from './Components/calculator'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    }
  }

  handleName = (e) => {
    this.setState({
      todoName: e.target.value
    })
  }
  
  render() {


    return (
      <div className="App">

        <Calculator />
      </div>
    );
  }
}

export default App;
