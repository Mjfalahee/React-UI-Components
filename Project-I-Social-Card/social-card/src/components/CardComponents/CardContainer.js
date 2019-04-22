import React from 'react';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import './Card.css';



function CardContainer() {

    return (
        <div className="cardcontainer">
            <a href="https://www.reactjs.org">
            <CardBanner />
            <CardContent />
            </a>
        </div>
    );
}



export default CardContainer;