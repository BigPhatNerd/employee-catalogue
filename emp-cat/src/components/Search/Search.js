import React, { useContext } from "react";
import "./Search.css";
import EmpContext from "../../utils/EmpContext";



const Search = () => {
    const searchContext = useContext(EmpContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search by Name" aria-label="Search"
                    onChange={e => EmpContext.handleSearchChange(e)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>


    )
}

export default Search;