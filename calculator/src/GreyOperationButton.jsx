import React from 'react';
import './GreyOperationButton.css'


class GreyOperationButton extends React.Component {
	constructor(props) {
		super();
	}

	handleOperation = () => {
		this.props.onClick();
	}

	render(){
		return (

		<button className={this.props.className} onClick={this.handleOperation}>{this.props.name}</button>)
	}


}

export default GreyOperationButton;