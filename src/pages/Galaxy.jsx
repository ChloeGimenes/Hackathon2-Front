import React, { Component } from "react";

import "../styles/Galaxy.css";
import ApiPlanet from "../API/Planet";

class Galaxy extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     flag: "",
  //     button: true
  //     // Cockpit: "hiddenComponent",
  //     // Galaxy: "showComponent"
  //   };
  //   this.handleClick2 = this.handleClick2.bind(this);
  // }

  handleClick2(x) {
    for (let i = 0; i < ApiPlanet.length; i++) {
      console.log(i);
      if (x.id === i) {
        this.props.history.push(
          `/Cockpit/${x.id}/${this.props.match.params.firstname}`
        );
        console.log(x);
      }
    }
  }

  render() {
    return (
      <div className='galax'>
        <div class='stars'></div>
        <div class='twinkling'></div>
        <div className='galaxy-title-flex'>
          <div className='galaxy-title'>
            Welcome {this.props.match.params.firstname} ! Pick up your planet !
          </div>
        </div>
        <div className='container_map'>
          {ApiPlanet.map(x => (
            <img
              className='imagePlanet'
              src={x.image}
              alt=''
              value={x.id}
              onClick={() => {
                this.handleClick2(x);
              }}
            />
          ))}
        </div>
        <div class='clouds'></div>
      </div>
    );
  }
}

export default Galaxy;
