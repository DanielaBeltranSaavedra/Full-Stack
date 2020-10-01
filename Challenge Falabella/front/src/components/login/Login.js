import React, { Component } from 'react';
import './Login.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class Login extends Component {
  constructor(){
    super();
  }
  render() {
    return (
        <div className="Login">
               <section id="global">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Spotify_logo_vertical_black.jpg/1200px-Spotify_logo_vertical_black.jpg" title="SpotifyLogo"/>
                  <a href="http://localhost:8888/login" className="login">LOGIN</a>
               </section>
        </div>
    );
  }
}
