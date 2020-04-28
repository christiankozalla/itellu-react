import React from "react";

const Signup = (props) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row-reverse">
        <button id="signUp" type="button" className="btn">
          Sign Up
        </button>
      </div>
      <div className="d-flex flex-row-reverse py-2">
        <p style={props.styles}>The first month goes on us</p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
