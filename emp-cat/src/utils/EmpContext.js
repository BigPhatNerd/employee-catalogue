import React from "react";

const EmpContext = React.createContext({
  name: "",
  picture: "",
  email: "",
  phone: 0,
  dob: 0,
});

export default EmpContext;
