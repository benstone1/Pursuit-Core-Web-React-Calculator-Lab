import React from 'react';
import './Calculator.css';
import NumButton from './NumButton.jsx';
import Display from './Display.jsx';
import OperationButton from './OperationButton.jsx';
import GreyOperationButton from './GreyOperationButton.jsx';



class Calculator extends React.Component {
	constructor(){
		super();
		this.state = {
		  displayValue: '0',
		  previousValue: null,
          operation: null,
          waitingForNewValue: false
		}
	}

	handleButtonPress = (num) => {
			this.setState({
			displayValue: num
		});
	}


	render(){
		return(
			<div className ='mainBody'>
				<Display num={this.state.displayValue} />
				<div className='calcRow'>
					<GreyOperationButton name='AC' className='flex1' />
					<GreyOperationButton name='%'className='flex1' />
					<GreyOperationButton name='±' className='flex1' />
					<OperationButton name='÷' className='flex1' /> 
				</div>
				<NumButton number={9} handleButtonPress={this.handleButtonPress} />
			</div>)
	}
}

export default Calculator