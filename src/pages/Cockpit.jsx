import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Cockpit.css";
import ApiPlanet from "../API/Planet";

class Cockpit extends Component {
  handleClick3(x) {
    for (let i = 0; i < ApiPlanet.length; i++) {
      if (x.name === i) {
        this.props.history.push(`/Decollage/${x.name}`);
      }
    }
  }

  render() {
    return (
      <div className='cockpit-content'>
        <video autoPlay muted loop id='myVideo'>
          <source src={require("../assets/cockpit.mp4")} type='video/mp4' />
        </video>

        <div className='cockpit-board'>
          {ApiPlanet.map(x => {
            if (x.id === Number(this.props.match.params.id)) {
              return (
                <div className='cockpit-api'>
                  <div className='left'>
                    <div>
                      <img
                        className='cockpit-board-image'
                        src={x.image}
                        alt='tata'></img>
                    </div>
                    <div className='button'>
                      <Link to={`/Galaxy/${this.props.match.params.firstname}`}>
                        <button className='bibi'>BACK</button>
                      </Link>
                      <Link to={`/Decollage/${x.name}`}>
                        <button
                          className='bibi'
                          onClick={() => this.handleClick3(x)}>
                          BOOK
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className='api-text'>
                    <h1>{x.name}</h1>
                    <h1>Habitants: {x.habitants}</h1>
                    <h1>Description: {x.description}</h1>
                  </div>
                </div>
              );
            }
            return;
          })}
        </div>
      </div>
    );
  }
}

export default Cockpit;
