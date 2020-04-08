import React from "react";

import Story from "./Story.js";

class Stories extends React.Component {
  state = {
    stories: [
      {
        id: 1,
        header: "This is the Header",
        subHeader: "Subheader here",
        imagePath: "/public/originals/picture.jpg",
        imageAlt: "image description",
        content:
          "This is the content of the Story. It will be only displayed, when the user clicks on the story. Maybe a div can pop down and show the story content.",
      },
    ],
  };

  componentDidMount() {
    this.getStories();
  }

  getStories = () => {};

  render() {
    return (
      <div className="row mx-auto">
        {this.state.stories.map((story) => (
          <Story
            header={story.header}
            subheader={story.subHeader}
            imageUrl={story.imagePath}
            alt={story.imageAlt}
          />
        ))}
      </div>
    );
  }
}

export default Stories;
