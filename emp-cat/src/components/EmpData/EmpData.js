import React, { useContext } from "react";
import EmpContext from "../../utils/EmpContext";
import "./EmpData.css";

function EmpData() {
    const DataContext = useContext(EmpContext);

    return (
        <tbody >
    {DataContext.developerState.filteredEmployees[0] !== undefined && DataContext.developerState.filteredEmployees[0].name !== undefined ? (

    DataContext.developerState.filteredEmployees.map(( { name, picture, email, dob }) => {

    return (

      
            <tr>
                <td>
                    <img src= {picture.medium} alt= {name.first + " " + name.last}></img></td>
                <td>{name.frist + " " + name.last}</td>
                <td>{email}</td>
                <td>{dob.date}</td>
            </tr>

       
    );
    })
    ) : (
        <></> 
    )}
</tbody>
    );
}

export default EmpData;