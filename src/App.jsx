import React from "react";
import Routes from "./routes";
import "./App.scss";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer";

/**
 * App Component
 */
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
      <Footer />
    </React.Fragment>
  );
};

export default App;
