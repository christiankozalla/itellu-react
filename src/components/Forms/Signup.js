import React from "react";

const Signup = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <button id="signUp" type="button" className="btn">
          Sign Up
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <p style={props.styles}>The first month is free 🎉</p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
