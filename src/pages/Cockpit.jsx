import React, { Component } from "react";
import '../styles/Cockpit.css'



class Cockpit extends Component {
 
  render() {
    return (
      
  <div className="cockpit-content">   
<video autoPlay muted loop id="myVideo">
  <source src={require("../assets/cockpit.mp4")} type="video/mp4" />
</video>
<div className="cockpit-board">
<p className="cockpit-title">Titre</p>
<div>
    <div className="cockpit-board-image">
    <p>Description en 2 lignes.</p>
    </div>
</div>
</div>
</div>

    );
  }}

export default Cockpit;