import React from 'react';

const Button = (props) => {
    return <button 
                className = {props.htmlClass} 
                id = {props.htmlId} 
                onClick = {props.jsFunction}
            >
                {props.disValue}
            </button>
}

export default Button;