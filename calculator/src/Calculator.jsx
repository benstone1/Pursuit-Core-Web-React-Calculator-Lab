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
			let temp = this.state.displayValue;
			if(this.state.waitingForNewValue || this.state.displayValue === '0'){
				this.setState({
					displayValue: num,
					previousValue: temp,
					waitingForNewValue: false
				})
			}
			else{
				this.setState({
					displayValue: this.state.displayValue + num.toString(),
				});
			}
	}

	handleClearOperation = () => {
		this.setState({
		  displayValue: '0',
		  previousValue: null,
          operation: null,
          waitingForNewValue: false
		})
	}

	handlePercentageOperation = () => {
		const temp = this.state.displayValue;
		this.setState({
			displayValue: this.state.displayValue / 100,
			previousValue: temp
		});
	};

	handlePlusMinus = () => {
		const temp = this.state.displayValue
		if(0 < temp){
			this.setState({
				displayValue: temp - (temp * 2)
			});
		}
		else{
			this.setState({
				displayValue: Math.abs(temp)
			});
		};
	};

	doMath = () => {
		const prev = this.state.displayValue;
		switch(this.state.operation){
			case 'add': this.setState({displayValue: parseFloat(this.state.displayValue) + parseFloat(this.state.previousValue),
				previousValue: prev, operation: null});
			break;
			case 'sub': this.setState({displayValue: parseFloat(this.state.previousValue) -parseFloat(this.state.displayValue),
				previousValue: prev, operation: null}); 
			break;
			case 'mult': this.setState({displayValue: parseFloat(this.state.displayValue) * parseFloat(this.state.previousValue), previousValue: prev, operation: null})
			break;
			case 'div': this.setState({displayValue: parseFloat(this.state.previousValue) / parseFloat(this.state.displayValue), previousValue: prev, operation: null});
			break;
		}
	};

	handleDivision = () => {
		if(this.state.operation){
			this.doMath();
		}
		else{
		this.setState({
			previousValue: this.state.displayValue,
			operation: 'div',
			waitingForNewValue: true
		});	
		}
	}

	handleMultiplication = () => {
		if(this.state.operation){
			this.doMath();
		}
		else{
		this.setState({
			previousValue: this.state.displayValue,
			operation: 'mult',
			waitingForNewValue: true
		});	
	}
	}

		handleAddition = () => {
		if(this.state.operation){
			this.doMath();
		}
		else{
		this.setState({
			previousValue: this.state.displayValue,
			operation: 'add',
			waitingForNewValue: true
		});	
	}
	}

	handleDecimal = () => {
		let temp = this.state.displayValue
		this.setState({
			displayValue: this.state.displayValue + '.'
		});
	}

		handleSubtraction = () => {
		if(this.state.operation){
			this.doMath();
		}
		else{
		this.setState({
			previousValue: this.state.displayValue,
			operation: 'sub',
			waitingForNewValue: true
		});	
	}
	}

	handleEquation = () => {
		this.doMath();
		this.setState({
			waitingForNewValue: true
		})
	}


	render(){
		return(
			<div className ='mainBody'>
				<Display num={this.state.displayValue} />
				<div className='calcRow'>
					<GreyOperationButton name='AC'onClick={this.handleClearOperation} className='flex1 button' />
					<GreyOperationButton name='%'className='flex1 button' onClick={this.handlePercentageOperation} />
					<GreyOperationButton name='±' className='flex1 button' onClick={this.handlePlusMinus} />
					<OperationButton name='÷' className='flex1 orange' onClick={this.handleDivision} /> 
				</div>
				<div className='calcRow'>
					<NumButton number={7} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={8} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={9} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<OperationButton name='X' className='flex1 orange' onClick={this.handleMultiplication} />
				</div>
				<div className='calcRow'>
					<NumButton number={4} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={5} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={6} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<OperationButton name='-' className='flex1 orange' onClick={this.handleSubtraction} />
				</div>
				<div className='calcRow'>
					<NumButton number={1} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={2} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<NumButton number={3} className='flex1 button' handleButtonPress={this.handleButtonPress}/>
					<OperationButton name='+' className='flex1 orange' onClick={this.handleAddition} />
				</div>
				<div className='calcRow'>
					<NumButton number={0} className='flex2 button' handleButtonPress={this.handleButtonPress}/>
					<GreyOperationButton name='.'className='flex1 button' onClick={this.handleDecimal} />
					<OperationButton name='=' className='flex1 orange' onClick={this.handleEquation} />
				</div>
			</div>)
	}
}

export default Calculator
//when you come back, work on making the number shit work on the calculator, as well as the division shit