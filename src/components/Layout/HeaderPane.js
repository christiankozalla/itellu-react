import React from "react";

const HeaderPane = (props) => {
  return (
    <div className="row" style={props.styles}>
      <h2 className="mt-auto text-white pb-5 pl-5">
        Wir glauben an <br />
        Geschichten und <br />
        Wissenschaft. <br />
        Sowie an Wandel.
      </h2>
    </div>
  );
};

export default HeaderPane;
