import React from "react";
import './NameCard.css';

const nameurl = " https://www.namecheap.com/domains/registration/results/?domain=%27%3B";

const NameCard = ({ suggestednames }) => {
    return (
        <a href={`${nameurl}${suggestednames}`}>
            <div className="name-card-link">
                <p ClassName="name-card" >{suggestednames}</p>
            </div>
        </a>

    );
}


export default NameCard;