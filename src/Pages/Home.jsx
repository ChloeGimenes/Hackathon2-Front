import React, { Component } from "react";
import '../Style/Home.css'
import logoNasa from '../assets/nasa-logo.png'

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
<img src={logoNasa} alt='nasa-logo' className="content-logo-nasa"/>
<div className="content-text">



  <h1>NASA BOOKING</h1>
  <br/><p>Bookez maintenant votre billet pour l'espace.</p>
  
  <button id="myBtn" onclick="myFunction()">GO !</button>
  </div>
</div>
</div>
    );
  }
}

export default Home;
