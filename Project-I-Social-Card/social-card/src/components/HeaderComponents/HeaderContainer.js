import React from 'react';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import './Header.css';


function HeaderContainer() {
    return (
        <div className="headercontainer">
            <ImageThumbnail />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;