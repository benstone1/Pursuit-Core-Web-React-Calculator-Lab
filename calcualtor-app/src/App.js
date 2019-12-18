import React from "react";
import "./App.css";
import {evaluate} from "mathjs"

class App extends React.Component {
  constructor() {
    super();
    this.initialState = {
      numbers: "",
      
    };
    this.state = this.initialState;
  }
    

handleNumber = event  => {
  const {numbers} = this.state
  this.setState({
    numbers: numbers + event.target.value
  })
}

handleClear = event => {
  const {numbers} = this.state
  this.setState ({
    numbers: ""
  })
}

handleEqual = event => {
  const {numbers, equals} = this.state
  this.setState ({
   numbers: evaluate(numbers),
   
  })
}





componentDidUpdate() {
  console.log(this.state);
}
  
  render() {
const {numbers} = this.state

    return (
      <div className="App">
        <div className="calculator">
          <section className="section">{numbers}</section>
          <button className="button" onClick={this.handleClear}>AC</button>
          <button className="button" value="%" onClick={this.handleNumber}>%</button>
          <button className="button">±</button>
          <button className="button orange" value="/" onClick={this.handleNumber}>÷</button>
          <button className="button" value="7" onClick={this.handleNumber}>7</button>
          <button className="button" value="8" onClick={this.handleNumber}>8</button>
          <button className="button" value="9" onClick={this.handleNumber}>9</button>
          <button className="button orange" value="×"onClick={this.handleNumber}>×</button>
          <button className="button" value="4"onClick={this.handleNumber}>4</button>
          <button className="button" value="5"onClick={this.handleNumber}>5</button>
          <button className="button" value="6"onClick={this.handleNumber}>6</button>
          <button className="button orange" value="-" onClick={this.handleNumber}>−</button>
          <button className="button" value="1"onClick={this.handleNumber}>1</button>
          <button className="button" value="2"onClick={this.handleNumber}>2</button>
          <button className="button" value="3"onClick={this.handleNumber}>3</button>
          <button className="button orange" value="+" onClick={this.handleNumber}>+</button>
          <button className="button zero">0</button>
          <button className="button" value="." onClick={this.handleNumber}>.</button>
          <button className="button orange" onClick={this.handleEqual}>=</button>
        </div>
      </div>
    );
  }
}

export default App;
