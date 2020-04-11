import React from "react";
import "./App.css";

// Component imports
import ItelluNav from "./components/Navbar/ItelluNav.js";
import Stories from "./components/Stories/Stories.js";

const styles = {
  headBanner: {
    backgroundColor: "#224e8b",
    height: 375,
  },
  button: {
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
      <div className="row" style={styles.headBanner}>
        <h2 className="mt-auto text-white pb-5 pl-5">
          Wir glauben an <br />
          Geschichten und <br />
          Wissenschaft. <br />
          Sowie an Wandel.
        </h2>
      </div>

      <div className="arrow-down mx-auto"></div>

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

      <div className="d-flex flex-row-reverse">
        <button id="signUp" type="button" className="btn">
          Sign Up
        </button>
      </div>
      <div className="d-flex flex-row-reverse py-2">
        <p style={styles.button}>The first month goes on us</p>
      </div>

      <div className="arrow-down-empty mx-auto my-4"></div>

      <div className="text-center" style={styles.headline}>
        Latest Stories
      </div>
      <Stories />
    </div>
  );
}

export default App;
