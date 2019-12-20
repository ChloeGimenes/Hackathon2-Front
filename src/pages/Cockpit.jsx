import React, { Component } from "react";

import "../styles/Cockpit.css";

class Cockpit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cockpit-content'>
        <video autoPlay muted loop id='myVideo'>
          <source src={require("../assets/cockpit.mp4")} type='video/mp4' />
        </video>

        <div className='cockpit-board'>
          <div>
            <div></div>
            <div className='cockpit-api'>
              <div className='cockpit-board-image'></div>
              <div className='api-text'>
                <h1>Habitants:</h1>
                <h1>Descrption:</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cockpit;
