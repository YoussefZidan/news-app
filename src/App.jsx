import React from "react";
import Routes from "./routes";
import "./App.scss";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </React.Fragment>
  );
};

export default App;
