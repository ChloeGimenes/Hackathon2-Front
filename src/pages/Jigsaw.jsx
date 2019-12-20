import React from "react";

import "../styles/Jigsaw.css";
import ReactTypingEffect from "react-typing-effect";

class Jigsaw extends React.Component {
  render() {
    return (
      <div className='Jigsaw-Block'>
        <div className='Jigsaw-Avatar'>
          <img
            className='Jigsaw-Image'
            alt='Jigsaw'
            title='Jigsaw'
            src={require("../assets/jigsawAvatar.png")}
          />
        </div>
        <div className='Jigsaw-Quote'>
          <ReactTypingEffect
            speed={50}
            eraseDelay={5000000}
            cursor=' '
            text={this.props.quote}
          />
        </div>
      </div>
    );
  }
}
export default Jigsaw;
