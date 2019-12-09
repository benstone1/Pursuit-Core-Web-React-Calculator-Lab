import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1:'',
      num2:'',
      result: 0,
      method: ''
    }
  }
  addClick = () => {
 
    this.setState({
      operation: 'addition',

    })
  }
  equalsClick = () => {
    let {num1, num2, operation} = this.state
    if (operation === 'addition') {
      this.setState({
        result: parseInt(num1) + parseInt(num2)
      })
    }
  }
  render() {
    let { result } = this.state
    return (
      <div className="App">
        <div className='calculator-whole'>

          <div className='stage'>
            <h1>01234</h1>
            {/* <input className = 'input-stage' type = 'text'/> */}

          </div>
          <button className='button' id='all-clear'>AC</button>

          <button className='button' id='percent'>%</button>
          <button className='button' id='negative'>±</button>
          <button className='button orange' id='divide'>÷</button>
          <button className='button' id='num7'>7</button>
          <button className='button' id='num8'>8</button>
          <button className='button' id='num9'>9</button>
          <button className='button orange' id='multiply'>x</button>
          <button className='button' id='num4'>4</button>
          <button className='button' id='num5'>5</button>
          <button className='button' id='num6'>6</button>
          <button className='button orange' id='subtract'>-</button>
          <button className='button' id='num1'>1</button>
          <button className='button' id='num2'>2</button>
          <button className='button' id='num3'>3</button>
          <button className='button orange' id='addition' onClick = {this.addClick}>+</button>
          <button className='button' id='num0'>0</button>
          <button className='button' id='decimal'>.</button>
          <button className='button orange' id='equals' onClick = {this.equalsClick}>=</button>
          <button className='button' id='clear'>C</button>
        </div>
        <p>{result}</p>
      </div>
    );
  }
}

export default App;
