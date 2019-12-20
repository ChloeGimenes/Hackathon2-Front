/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/Form.css";
import redButton from "../assets/redButton.png";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      destination: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.state.firstname);
    return (
      <div className='avion'>
        <h1 className='titre'>Le formulaire de l'espace</h1>
        <form className='container_div' onSubmit={this.submitForm}>
          <div className='div un yellow'>
            <label for='firstname'>Prénom</label>
            <input
              className='input'
              type='text'
              id='firstname'
              name='firstname'
              onChange={this.onChange}
              value={this.state.firstname}></input>
          </div>
          <div className='div deux red'>
            <label for='lastname'>Nom</label>
            <input
              className='input'
              type='text'
              id='lastname'
              name='lastname'
              onChange={this.onChange}
              value={this.state.lastname}></input>
          </div>
        </form>
        <Link to='/Galaxy'>
          <img src={redButton} alt='red button' className='button' />
        </Link>
      </div>
    );
  }
}
