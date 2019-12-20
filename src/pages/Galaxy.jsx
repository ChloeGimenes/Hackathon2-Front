import React, { Component } from "react";
import "../styles/Galaxy.css";
import logoZinzin from "../assets/planet-zinzin.png";
import logoDonuts from "../assets/donut.png";
import logoCosmo from "../assets/cosmo.png";
import logoBowling from "../assets/bowling.png";
import logoApes from "../assets/apes.png";
import logoSushi from "../assets/sushi.png";


class Galaxy extends Component {
  render() {
    return (
        <div>
<div class="stars"></div>
<div class="twinkling"></div>
<div className="galaxy-title-flex"><div className="galaxy-title">Welcome Max ! Pick up your planet !</div></div>
<div className="effect-float"><img src={logoZinzin} alt='nasa-logo' className="galaxy-logo-zinzin" /></div>
<div><img src={logoDonuts} alt='nasa-logo' className="galaxy-logo-donuts" /></div>
<div><img src={logoCosmo} alt='nasa-logo' className="galaxy-logo-cosmo1" /></div>
<div><img src={logoBowling} alt='nasa-logo' className="galaxy-logo-bowling" /></div>
<div><img src={logoApes} alt='nasa-logo' className="galaxy-logo-apes" /></div>
<div><img src={logoSushi} alt='nasa-logo' className="galaxy-logo-sushi" /></div>
{/* <div class="clouds"></div> */}
</div>
    )

  }
}

export default Galaxy;