import React from 'react';
import './OperationButton.css'


class OperationButton extends React.Component {
	constructor(props) {
		super();
	}

	handleOperation = () => {
		this.props.onClick();
	}
	render(){
		return (
		<button className='orange' className={this.props.className} onClick={this.handleOperation}>{this.props.name}</button>)
	}


}

export default OperationButton;