import React, { useContext } from "react";
import EmpContext from "../../utils/EmpContext";
import "./EmpData.css";

function EmpData() {
    const { name, picture, email, dob } = useContext(EmpContext);

    return (

        <tbody className="tableInfo">
            <tr>
                <td>
                    <img>{picture.medium}</img></td>
                <td>{name.frist + " " + name.last}</td>
                <td>{email}</td>
                <td>{dob.date}</td>
            </tr>

        </tbody>
    )
}

export default EmpData;