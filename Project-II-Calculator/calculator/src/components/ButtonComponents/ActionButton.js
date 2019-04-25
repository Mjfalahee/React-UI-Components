import React from 'react';
import './Button.scss';


const ActionButton = props => {
    return (
        <div>
        <button className="actionbutton"> {props.operator} </button>
        </div>
    );
}

export default ActionButton;