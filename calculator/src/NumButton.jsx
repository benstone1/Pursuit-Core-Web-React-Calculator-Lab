import React from 'react';
import './NumButton.css';



class NumButton extends React.Component {

	constructor(props){
		super();
	}

	handleButtonPress = () => {
		return this.props.handleButtonPress(this.props.number);
	}



	render(){
	return (
		<button className='button' onClick={this.handleButtonPress}>{this.props.number}</button>)
	}
}


export default NumButton;