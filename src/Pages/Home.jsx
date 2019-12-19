import React, { Component } from "react";
import '../Style/Home.css'

class Home extends Component {
 
  render() {
    return (
      // <video className='background-video'
      //   autoPlay
      //   muted
      //   loop
      //   style={{
      //     position: "fixed",
      //     width: "100%",
      //     left: 0,
      //     top: 0
      //   }}
      // >
      //   <source src="./assets/stargate-titles-doctor-who-style.mp4" type="video/mp4" />
      // </video>

  <div>   
<video autoPlay muted loop id="myVideo">
  <source src={require("../assets/all-stargates-wormhole-vortex-hd.mp4")} type="video/mp4" />
</video>


<div class="content">
  <h1>Heading</h1>
  <p>Lorem ipsum...</p>
  
  <button id="myBtn" onclick="myFunction()">Pause</button>
</div>
</div>
    );
  }
}

export default Home;
