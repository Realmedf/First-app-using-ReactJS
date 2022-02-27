import React from "react";

import './Header.css';

const Header = ({ headtitle, headerexpanded }) => {

    {
        return (
            <div className="header-container">
                <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"

                    className={`head-image  ${headerexpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'}`}
                    alt="header-image" />

                <h1 className="head-text">{headtitle}</h1>

            </div>);
    };
}
export default Header