import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home';
import {render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/home:access_token' component={Home} />
        </Switch>
      </Router> 
      </div>
    );
  }
}
