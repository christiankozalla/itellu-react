import React from "react";
import StorySlides from "./StorySlides";

class Stories extends React.Component {
  state = {
    isLoaded: false,
    latestStories: [],
    recomStories: [],
    cardStories: [],
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

          // Verteile jsonResponse auf latestStories, recomStories, cardStories
          const latest = [];
          const recommended = [];
          const cards = [];

          jsonResponse.forEach((story) => {
            switch (story.type) {
              case "latest":
                latest.push(story);
                break;
              case "recom":
                recommended.push(story);
                break;
              case "card":
                cards.push(story);
                break;
              default:
                console.log("Could not allocate Story");
            }
          });

          this.setState({
            latestStories: latest,
            recomStories: recommended,
            cardStories: cards,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      )
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { latestStories, recomStories, cardStories } = this.state;
    return (
      <React.Fragment>
        <div className="row mx-auto">
          <div className="mx-auto text-center">
            <h2 style={{ padding: "0.9rem" }}>
              <strong>Latest Stories</strong>
            </h2>
            <StorySlides stories={latestStories} />
          </div>
        </div>
        <div className="row mx-auto">
          <div className="mx-auto text-center">
            <h2 style={{ padding: "0.9rem" }}>
              <strong>Recommended Stories</strong>
            </h2>
            <StorySlides stories={recomStories} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Stories;
