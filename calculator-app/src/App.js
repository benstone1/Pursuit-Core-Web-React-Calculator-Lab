import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      result: 0,
      method: null
    }
  }
  allClearClick = () => {
    this.setState({
      num1: '',
      num2: '',
      result: 0,
      method: null
    })
  }
  addClick = () => {
    this.setState({
      method: 'addition'
    })
  }
  subClick = () => {
    this.setState({
      method: 'subtraction',

    })
  }
  divClick = () => {
      this.setState({
        method: 'division',
  
      })
  }
  equalsClick = () => {
    let { num1, num2, method } = this.state
    if (method === 'addition') {
      this.setState({
        result: parseInt(num1) + parseInt(num2)
      })
    } else if(method === 'subtraction'){
      this.setState({
        result: parseInt(num1) - parseInt(num2)
      })}
      else if(method === 'division') {
        if (num2 === 0){
          this.setState({
            result: 'ERROR'
          })
        }
        else{
        this.setState({
          result: parseInt(num1) / parseInt(num2)
        })
      }
    }
    }
  
  numberClick = (element) => {
    let {num1, num2, method} = this.state;
    if(method === null){
    this.setState({
      num1: num1 + element.target.value
    })
  } else{
    this.setState({
      num2: num2 + element.target.value
    })
  }
  }
  render() {
    let { num1, result } = this.state
    return (
      <div className="App">
        <div className='calculator-whole'>

          <div className='stage'>
            <h1>{result}</h1>
            {/* <input className = 'input-stage' type = 'text'/> */}

          </div>
          <input type='button' className='button' id='all-clear' onClick = {this.allClearClick} value='AC' />

          <input type='button' className='button' id='percent' value='%' />
          <input type='button' className='button' id='negative' value='±' />
          <input type='button' className='button orange' id='divide' onClick={this.divClick} value='÷' />
          <input type='button' className='button' id='num7' onClick = {this.numberClick} value='7' />
          <input type='button' className='button' id='num8' onClick = {this.numberClick} value='8' />
          <input type='button' className='button' id='num9' onClick = {this.numberClick} value='9' />
          <input type='button' className='button orange' id='multiply' value='x' />
          <input type='button' className='button' id='num4' onClick = {this.numberClick} value='4' />
          <input type='button' className='button' id='num5' onClick = {this.numberClick} value='5' />
          <input type='button' className='button' id='num6' onClick = {this.numberClick} value='6' />
          <input type='button' className='button orange' id='subtract' onClick={this.subClick} value='-' />
          <input type='button' className='button' id='num1' value='1' onClick = {this.numberClick}/>
          <input type='button' className='button' id='num2' value='2' onClick = {this.numberClick}/>
          <input type='button' className='button' id='num3' value='3' onClick = {this.numberClick}/>
          <input type='button' className='button orange' id='addition' onClick={this.addClick} value='+' />
          <input type='button' className='button' id='num0' onClick = {this.numberClick} value='0' />
          <input type='button' className='button' id='decimal' onClick = {this.numberClick} value='.' />
          <input type='button' className='button orange' id='equals' onClick={this.equalsClick} value='=' />
          <input type='button' className='button' id='clear' value='C' />
        </div>
      </div>
    );
  }
}

export default App;
