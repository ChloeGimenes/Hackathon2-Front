import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";
import logoNasa from "../assets/nasa-logo.png";

class Home extends Component {
  render() {
    return (
      <div>
        <video autoPlay muted loop id='myVideo'>
          <source
            src={require("../assets/all-stargates-wormhole-vortex-hd.mp4")}
            type='video/mp4'
          />
        </video>

        <div class='content'>
          <img src={logoNasa} alt='nasa-logo' className='content-logo-nasa' />
          <div className='content-text'>
            <h1>NASA BOOKING</h1>
            <br />
            <p>Réservez maintenant votre billet pour l'espace.</p>
            <Link to='./ErrorFound'>
              <button className='myBtn' onclick='myFunction()'>
                GO !
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
