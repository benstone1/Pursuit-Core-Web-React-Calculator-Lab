import React from 'react';

const Button = (props) => {
    const handleClick = () => {
        props.jsFunction(props.disValue)
    }
    return <button 
                className = {props.htmlClass} 
                id = {props.htmlId} 
                onClick = {handleClick}
            >
                {props.disValue}
            </button>
}

export default Button;