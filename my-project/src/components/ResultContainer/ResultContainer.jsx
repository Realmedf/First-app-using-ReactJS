import React from "react";
import './ResultContainer.css';
import NameCard from "../NameCard/NameCard";

const Result = ({ textsuggested }) => {

    const suggestednamejsx = textsuggested.map((suggestednames) => {
        return <NameCard key={suggestednames} suggestednames={suggestednames} />
    });

    return (
        <div className="ResultContainer">
            {suggestednamejsx}
        </div>
    )

}

export default Result;