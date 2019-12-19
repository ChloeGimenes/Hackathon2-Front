import React, { Component } from "react";

import "../styles/ErrorFound.css";
import errorNasa from "../assets/error-nasa-logo.png";

class ErrorFound extends Component {
  render() {
    return (
      <div className='error-page'>
        <div className='container-error'>
          <img
            src={errorNasa}
            alt='error-nasa-logo'
            className='logo-error-nasa'
          />
        </div>

        <div className='container-button'>
          <button className='error-button'> REDIRECTING</button>
        </div>
      </div>
    );
  }
}
export default ErrorFound;
