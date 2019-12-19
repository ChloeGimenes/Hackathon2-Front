import React, { Component } from "react";

class Home extends Component {
 
  render() {
    return (
      <video className='background-video'
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          width: "100%",
          left: 0,
          top: 0
        }}
      >
        <source src="./assets/stargate-titles-doctor-who-style.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default Home;
