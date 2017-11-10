import React, { Component } from "react";
import ImageContain from "../components/ImageContain";
import API from "../utils/API";

class Discover extends Component {
  state = {
    image: "",
    // match:false,
    // matchCount: 0
  };

  componentDidMount(){
    this.pupsterImage();
  };

  handleNextImage = event => {
    event.preventDefault();
    this.random();
  };

  pupsterImage = () => {
    API.random()
      .then(res => 
        this.setState({image: res.data.message })
      )
      .then(console.log(`results of api call is  ${this.state.result}`))
      .catch(err => console.log(err));
  };

render() {
  return (
    <div className="container">
      <h1 className="text-info">Dog Discovery</h1>
        <p>
          See the random dog image here!
        </p>
        <p>
        When either button is clicked, a new dog image is loaded from the API. 
        If you "thumbs up" a dog, there is a 1 in 5 chance that the dog likes you too, and the friends count goes up by 1.
        </p>
        <ImageContain
          image={this.state.image}
        />
    </div>
  );
}
}
export default Discover;