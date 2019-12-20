import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import redButton from '../assets/redButton.png';
import Decol from "../assets/animDecol.gif";
import "../styles/Decollage.css";

class Decollage extends Component {
  render() {
    return (
      <div className='allDecol'>
        <div className='decol-titre'>
          Merci et bon voyage vers la {this.props.match.params.name} !
        </div>
        <img src={Decol} alt='naza-anim' className='anim2' />
      </div>
    );
  }
}

export default Decollage;
