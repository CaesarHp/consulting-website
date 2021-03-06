import React from "react";

import classes from "./App.module.scss";
import Header from "./components/Header";
import HeaderContent from "./components/HeaderContent";
import Service from "./components/Service";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <div className={classes["app-container"]}>
        <Header />
        <HeaderContent />
        <Service />
        <About />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
