import React from 'react';
import './Button.scss';



const BigButton = props => {
    return (
        <div>
        <button className="bigbutton"> {props.number} </button>
        </div>
    );
}

export default BigButton;
