import React from "react";

import Story from "./Story.js";

class Stories extends React.Component {
  state = {
    isLoaded: false,
    stories: [],
  };

  componentDidMount() {
    this.getStories();
  }

  getStories = () => {
    return fetch("http://localhost:4001/stories")
      .then((res) => {
        return res.json();
      })
      .then(
        (jsonResponse) => {
          console.log(jsonResponse);
          this.setState({
            stories: jsonResponse,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { stories } = this.state;
    return (
      <div className="row mx-auto">
        {stories.map((story) => (
          <Story
            key={story.timestamp}
            header={story.content.header}
            subheader={story.content.subheader}
            imagePath={story.imagePath}
            alt={story.imageAlt}
          />
        ))}
      </div>
    );
  }
}

export default Stories;

/* 





*/
