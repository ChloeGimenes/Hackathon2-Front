import React, { Component } from "react";
// import {Link} from "react-router-dom";
// import redButton from '../assets/redButton.png';
import Decol from '../assets/animDecol.gif';
import '../styles/Decollage.css';

class Decollage extends Component {
  render() {
    return (
    <div className="allDecol">
        <img src = {Decol} alt="naza-anim" className="anim2"/>
        {/* <Link to="/Galaxy"><img src={redButton} alt="" className="NextDecol"/></Link> */}
    </div>

    )}
}

export default Decollage;
