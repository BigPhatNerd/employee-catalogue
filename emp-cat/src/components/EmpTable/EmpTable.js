import React, { useContext } from "react";
import EmpData from "../EmpData.js";
import EmpTable from "./EmpTable.css";
import EmpContext from "../../utils/EmpContext";

const EmpTable = () => {
    const tableContext = useContext(EmpContext);

    return (
        <div>
            <table className="table">
                <tr>
                    {context.developerState.headings.map(({ name, width }) => {
                        return (
                            <th className="col" key={name} style={{ width }}
                                onClick={() => {
                                    context.handleSort(name.toLowerCase());
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