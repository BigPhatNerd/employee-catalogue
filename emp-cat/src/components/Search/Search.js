import React, { useContext } from "react";
import "./Search.css";
import EmpContext from "../../utils/EmpContext";



const Search = () => {
    const searchContext = useContext(EmpContext);

    return (
        <div className="topnav">
            <form className="submitForm">
                <input type="search" placeholder="Search by Name" aria-label="Search"
                    onChange={e => EmpContext.handleSearchChange(e)}
                />
                <button className="Submit" value="submit">Search</button>
            </form>
        </div>


    )
}

export default Search;