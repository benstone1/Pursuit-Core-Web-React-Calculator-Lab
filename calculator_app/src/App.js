import React from 'react';
import CalculatorForm from './Components/CalculatorForm'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
       inputBar: ''
    }
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    console.log('the form was submitted')
  }

  handleInputChange = (e) => {
    this.setState({
      inputBar: e.target.value
     
    })
     console.log('input bar', e.target.value)
  }
  render() {
    return (
      <div className="App">
        <CalculatorForm
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
        />
      </div>
    );
  }
  
}

export default App;
