import React from "react";
import picture from "../../files/picture.jpg";

import { Media } from "reactstrap";

const styles = {
  image: {
    maxWidth: "95%",
  },
};

function Story(props) {
  return (
    <div className="col">
      y
      <img src={picture} alt={props.alt} style={styles.image} />
      <span>{props.subheader}</span>
      <h2>{props.header}</h2>
    </div>
  );
}

export default Story;
