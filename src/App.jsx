import React from "react";
import Routes from "./routes";
import "./App.scss";
import NavBar from "./components/navBar";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes />
    </React.Fragment>
  );
};

export default App;
