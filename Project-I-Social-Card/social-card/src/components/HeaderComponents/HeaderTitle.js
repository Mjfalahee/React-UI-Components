import React from 'react';
import timestamp from 'time-stamp';
import './Header.css';

function HeaderTitle() {
    return (
        <div className="HeaderTitle">
        <h4> Lambda School</h4>
        <p className="tag"> @LambdaSchool</p> 
        </div>
    );
}

export default HeaderTitle;