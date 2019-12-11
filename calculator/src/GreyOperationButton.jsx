import React from 'react';
import './GreyOperationButton.css'


class GreyOperationButton extends React.Component {
	constructor(props) {
		super();
	}

	render(){
		return (
		<button className='button' className={this.props.className}>{this.props.name}</button>)
	}


}

export default GreyOperationButton;