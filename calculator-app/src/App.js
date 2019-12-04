import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='calculator-whole'>
        {/* <header className="App-header">
         This works without the internet
      </header> */}
      <div className = 'stage'>
        <h1>01234</h1>
        {/* <input className = 'input-stage' type = 'text'/> */}
      </div>
        <button className='button'>button</button>
        
        <div className='operations'>
          <button className='orange' id = 'divide'>÷</button>
          <button className='orange'>x</button>
          <button className='orange'>-</button>
          <button className='orange'>+</button>
          <button className='orange'>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
