import React, {useState, useEffect} from "react";
import API from "../../utils/API";
// import EmpContext from "../../utils/EmpContext";
import Wrapper from "../Wrapper/Wrapper.js";
import EmpTable from "../EmpTable/EmpTable.js";
import Search from "../Search/Search.js"

function EmpFunction() {
    const [developerState, setDeveloperState] = useState({
        employees: [],
        filteredEmps: [],
        Cols: [
            {name: "Picture", width: "20%"},
            {name: "Name", width: "40%"},
            {name: "Phone Number", width: "40%"},
            {name: "Email", width: "40%"},
            {name: "DOB", width: "20%"}
        ]

    });

    const handleInputChange = event => {
        setSearch(event.target.value);
        const list = developerState.employees.filter(item => {
            let values = item.name.first.toLowercase() + item.name.last.toLowercase();
            return values.indexOf(filter.toLowercase()) !== -1;
        })

        setDeveloperState({
            ...developerState,
            employees: res.data.res,
            filteredEmps: res.data.res
        })

    };

    useEffect(() => {
        API.searchEmps()
            .the(res => {
                setDeveloperState({
                    ...developerState,
                    employees: res.data,res,
                    filteredEmps: res.data.res, 

                });
            });

    }), [];

    return(
        <Wrapper>
            <Header />
            <Search handleInputChange={handleInputChange}
            res={} />
            <EmpTable 
                Cols= {developerState.Cols}
                employees= {developerState.filteredEmps}


            />

        </Wrapper>

    )
}

export default EmpFunction; 