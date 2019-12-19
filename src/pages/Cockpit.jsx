import React, { Component } from "react";
import '../styles/Cockpit.css'



class Cockpit extends Component {
 
  render() {
    return (
      
  <div>   
<video autoPlay muted loop id="myVideo">
  <source src={require("../assets/cockpit.mp4")} type="video/mp4" />
</video>
</div>

    );
  }}

export default Cockpit;