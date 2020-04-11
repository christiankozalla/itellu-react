import React from "react";

const styles = {
  image: {
    maxWidth: "95%",
  },
};

function Story(props) {
  return (
    <div className="col">
      <img src={props.imagePath} alt={props.alt} style={styles.image} />
      <span>{props.subheader}</span>
      <h2>{props.header}</h2>
    </div>
  );
}

export default Story;
