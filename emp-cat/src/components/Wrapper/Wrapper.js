import React from "react";
import Wrapper from "./Wrapper.css";

function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;