import React, {Component} from 'react'
import './Buttons.css';


class Buttons extends React.Component{
    render(){
return (

<div className="clac-button">
<input placeholder=""/>
<div id="row">
<button>AC</button>
<button>%</button>
<button>+/_</button>
<button id="orange">/</button>
</div>

<div id="row">
<button>7</button>
<button>8</button>
<button>9</button>
<button id="orange">*</button>
</div>

<div id="row">
<button>4</button>
<button>5</button>
<button>6</button>
<button id="orange">-</button>
</div>

<div id="row">
<button>1</button>
<button>2</button>
<button>3</button>
<button id="orange">+</button>
</div>

<div id="row">
<button>0</button>
<button>.</button>
<button id="orange">=</button>
</div>

  </div>
)
    }
}


export default Buttons;