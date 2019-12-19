import React, { Component } from "react";
import {Link} from "react-router-dom";
import NazAnim from '../assets/naza-anim.gif';
import Jigsaw from './Jigsaw';
import Nasa from '../assets/nasa-logo.png';
import '../styles/NazeAnim.css';

class NazeAnim extends Component {

    render() {
      return (
        
        <div className='allAnim'>   
            <img src = {NazAnim} alt="naza-anim" className="anim1"/>
            <Link to="/Form"><img src={Nasa} alt="" className="nasa-logo"/></Link>
            <Jigsaw quote={" Bonjour les boloss ! "} />
        </div>
        
      );
    }
  }
  
  export default NazeAnim;