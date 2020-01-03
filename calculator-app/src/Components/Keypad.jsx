import React from 'react'
import Button from './Button'
import Calculation from './Calculation'

class Keypad extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            displayValue : '0'
        }
    }

    handleValue = () => {
        
    }
    render(){
        const {displayValue} = this.state
        return (
          <div className="App">
            <div className='calculator'>
                <Calculation displayValue={displayValue} />
                    <div className= 'row'>
                        <Button>C</Button>
                        <Button>%</Button> 
                        <Button>+-</Button> 
                        <Button>/</Button> 
                    </div>
                    <div className= 'row'>
                        <Button>7</Button>
                        <Button>8</Button> 
                        <Button>9</Button> 
                        <Button>X</Button> 
                    </div>
                    <div className= 'row'>
                        <Button>4</Button>
                        <Button>5</Button> 
                        <Button>6</Button> 
                        <Button>-</Button> 
                    </div>
                    <div className= 'row'>
                        <Button>1</Button>
                        <Button>2</Button> 
                        <Button>3</Button> 
                        <Button>+</Button> 
                    </div>
                    <div className= 'row'>
                        <Button>.</Button>
                        <Button>0</Button> 
                        <Button>=</Button> 
                        <Button>AC</Button> 
                    </div>
            </div>
          </div>
        )
      }   
}

export default Keypad