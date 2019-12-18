import React from 'react';
import Calculator from './Components/Calculator'
import './App.css';
// import CalculatorForm from './Components/CalculatorForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      display: 0,
       buttonValue: ''
      
    }
  }
    
  // handleButtonsClick = (buttonValue) => {
  //   // const {buttonValue} = this.state
  //   this.setState({
  //     display: buttonValue,
  //   })
  //   console.log('the button has been clicked', buttonValue)
  // }

  

  render() {
    return (
      <div className="App">
        <Calculator
        />
      </div>
    );
  }
  
}

export default App;
