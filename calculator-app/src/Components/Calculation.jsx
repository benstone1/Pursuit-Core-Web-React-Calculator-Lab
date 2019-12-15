import React from 'react'

class Calculation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayValue = '0'
        }
    }
    
    render(){
        let {displayValue} = this.props
        return(
            <div className = 'result'>
                <p>{displayValue}</p>
            </div>
        )
    }
}

export default Calculation
