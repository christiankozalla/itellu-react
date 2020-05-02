import React from "react";
import "./App.css";

// Component imports
import ItelluNav from "./components/Navbar/ItelluNav";
import Stories from "./components/Stories/Stories";
import Signup from "./components/Forms/Signup";
import SimpleArrow from "./components/Layout/SimpleArrow";
import FilledArrow from "./components/Layout/FilledArrow";
import HeaderPane from "./components/Layout/HeaderPane";
import Forms from "./components/Forms/Forms";

const styles = {
  headBanner: {
    backgroundColor: "#224e8b",
    height: 375,
  },
  SignupButton: {
    fontSize: "1.33rem",
    color: "#F36954",
    fontWeight: "bold",
  },
  headline: {
    fontSize: "2.45rem",
    fontWeight: "bold",
  },
};

function App() {
  return (
    <div className="App container">
      <div className="row">
        <ItelluNav />
      </div>

      <HeaderPane styles={styles.headBanner} />

      <FilledArrow />

      <div className="row">
        <div className="col-2 col-md-3 col-sm-6 my-auto mx-auto">
          <h3 className="font-weight-bold">Our Stories</h3>
        </div>
        <div className="col-2 col-md-3 col-sm-6 my-auto mx-auto">
          Are real and true <br />
          Are filled with facts <br />
          Are interactive <br />
          Are challenging
        </div>
      </div>

      <Signup styles={styles.SignupButton} />

      <SimpleArrow />

      <Stories />

      <SimpleArrow />

      <Forms />
    </div>
  );
}

export default App;
