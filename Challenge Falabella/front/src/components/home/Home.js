import React, { Component } from 'react';
import './Home.css';
import Album from '../albums/Album';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <section id="global">
                    <div className="bar">
                        <div className="container" >
                            <nav className="menu">
                                <img src="https://i.pinimg.com/600x315/3b/a4/53/3ba453dd84f889246f38516b780546cc.jpg" title="SpotifyLogo" />
                                <div className="search-place">
                                    <form>
                                        <input className="search" type="search" name="search" placeholder="Buscar" aria-label="Buscar" />
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className='albums'>
                        <div className="box">
                            <Album></Album>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}