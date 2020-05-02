import React, { useState } from "react";

// react-bootstrap imports
import Carousel from "react-bootstrap/Carousel";

import "./StorySlides.css";

const StorySlides = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // remove "slide" prop from <Carousel> to make Stories slide in and out again
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} slide={false}>
      {props.stories.map((story) => {
        return (
          <Carousel.Item key={story.timestamp}>
            <img
              className="d-block w-100"
              src={story.imagePath}
              alt={story.imageAlt}
            />
            <Carousel.Caption>
              <p>{story.subheader}</p>
              <h3>{story.header}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default StorySlides;
