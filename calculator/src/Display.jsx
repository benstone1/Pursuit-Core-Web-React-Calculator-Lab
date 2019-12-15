import React from 'react';
import './Display.css';


const Display = (props) => {
	return(
		<div className='displayBar'><b className='white'>{props.num}</b></div>);
} 

export default Display;