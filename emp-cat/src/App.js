import React from "react";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Header from "./components/Header/Header.js";
import EmpFunction from "./components/EmpFunction/EmpFunction.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <EmpFunction />
      </Wrapper>
    </div>
  );
}

export default App;
