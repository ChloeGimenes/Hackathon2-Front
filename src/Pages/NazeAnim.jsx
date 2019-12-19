import React, { Component } from "react";
import NazAnim from '../assets/naza-anim.gif';
import Jigsaw from './Jigsaw';
import '../Style/NazeAnim.css';

class NazeAnim extends Component {

    render() {
      return (
        <div className='allAnim'>   
            <img src = {NazAnim} alt="naza-anim" className="anim1"/>
            <Jigsaw quote={" Bonjour les boloss ! "} />
        </div>
      );
    }
  }
  
  export default NazeAnim;