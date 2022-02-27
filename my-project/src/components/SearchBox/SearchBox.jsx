import React from "react";
import "./SearchBox.css"


const SearchBox = ({ handleInputChange }) => {

    return (
        <div className="search-box">

            <input onChange={(event) => handleInputChange(event.target.value)}

                placeholder="Type keyword" className="search-key" />

        </div>
    );

}

export default SearchBox