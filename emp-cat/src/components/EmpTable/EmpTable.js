import React, { useContext } from "react";
import EmpData from "../EmpData/EmpData.js";
import "./EmpTable.css";
import EmpContext from "../../utils/EmpContext";

function EmpTable() {
    const tableContext = useContext(EmpContext);

    return (
        <div>
            <table className="table">
                <tr>
                    {tableContext.developerState.cols.map(({ name, width }) => {
                        return (
                            <th className="col" key={name} style={{ width }}
                                onClick={() => {
                                    tableContext.handleInputChange(name.toLowerCase());
                                }}
                            >
                                {name}
                                <span className="pointer"></span>
                            </th>
                        );
                    })}

                </tr>
                <EmpData />
            </table>
        </div>

    )
}

export default EmpTable;