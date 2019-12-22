import React, { Component } from "react";
import { Link } from "react-router-dom";
import NazAnim from "../assets/naza-anim.gif";
import Jigsaw from "./Jigsaw";
import redButton from "../assets/redButton.png";
import "../styles/NazeAnim.css";

class NazeAnim extends Component {
  render() {
    return (
      <div className='allAnim'>
        <img src={NazAnim} alt='naza-anim' className='anim1' />
        <div className=''>
          <Link to='/Form'>
            <img src={redButton} alt='' className='nasa-logo' />
          </Link>
        </div>
        <Jigsaw
          quote={
            " La NASA c'est terminé ! Bienvenue chez AIR NAZE ! Montez dans la fusée et venez découvrir 'The Real World' !"
          }
        />
      </div>
    );
  }
}

export default NazeAnim;
