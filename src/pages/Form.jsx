/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";

import "../styles/Form.css";

export default class Form extends Component {
  render() {
    return (
      <div className='avion'>
        <form className='container_div'>
          <div className='div un'>
            <label for='firstname'>Prénom</label>
            <input className='input' type='text' id='firstname'></input>
          </div>
          <div className='div deux'>
            <label for='lastname'>Nom de famille</label>
            <input className='input' type='text' id='lastname'></input>
          </div>
          <div className='div trois'>
            <label for='age'>Age</label>
            <input className='input' type='number' id='age'></input>
          </div>
          <div className='div quatre'>
            <label for='birthdate'>Date de naissance</label>
            <input className='input' type='date' id='birthdate'></input>
          </div>
          <div className='div cinq'>
            <label for='destination-select'>Destination:</label>
            <select name='destination' id='destination-select'>
              <option value=''>Alors où ? où ? où ?</option>
              <option value='dog'>Dog</option>
              <option value='jupiter'>jupiter</option>
              <option value='snoop dog'>snoop dog</option>
              <option value='sushi'>sushi</option>
              <option value='rond-point'>rond-point</option>
              <option value='tatouine'>tatouine</option>
            </select>
          </div>
          <div className='div six'>
            <label for='groupeSanguin'>Groupe sanguin... au cas où !!</label>
            <input className='input' type='text' id='groupeSanguin'></input>
          </div>

          <div className='div sept'>
            <label for='vegetarien'>Végétarien</label>
            <input className='input' type='checkbox' id='vegetarien'></input>
          </div>
          <div className='div huit'>
            <label for=''>Groupe sanguin... au cas où !!</label>
            <input className='input' type='text' id=''></input>
          </div>
          <div className='div neuf'>
            <label for='classe-select'>Classe voyageur:</label>
            <select name='classe' id='classe-select'>
              <option value=''>choisis ici</option>
              <option value='1'>1ière classe</option>
              <option value='deux'>2nd classe</option>
              <option value='die'>
                Classe si il y à un problème... tu meurs
              </option>
            </select>
          </div>
          <div className='div dix stage'>
            <label for='poids'>poids</label>
            <input className='input' type='text' id='poids'></input>
          </div>
          <div className='div onze'>
            <label for='groupeSanguin'>Groupe sanguin... au cas où !!</label>
            <input className='input' type='text' id='groupeSanguin'></input>
          </div>
          <div className='div douze'>
            <label for='groupeSanguin'>Groupe sanguin... au cas où !!</label>
            <input className='input' type='text' id='groupeSanguin'></input>
          </div>
        </form>
        <button className='button'>Réserver</button>
      </div>
    );
  }
}
