import React from 'react';
import './OperationButton.css'


class OperationButton extends React.Component {
	constructor(props) {
		super();
	}

	render(){
		return (
		<button className='orange' className={this.props.className}>{this.props.name}</button>)
	}


}

export default OperationButton;