import React from 'react';
import './Button.scss';



const NumberButton = props => {
    return (
        <div>
        <button className="numberbutton"> {props.number} </button>
        </div>
    );
}

export default NumberButton;