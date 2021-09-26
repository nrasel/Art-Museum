import React, { useEffect, useState } from 'react';
import Artist from '../Artist/Artist';
import './Artists.css'

const Artists = () => {
    const [artists, setArtists] = useState([])
    useEffect(() => {
        fetch('./artist.json')
            .then(res => res.json())
            .then(data => setArtists(data))
    }, [])
    return (
        <div>
            <div className="artists-and-cart-container">
                <div className="">
                <div className="artist-container row row-cols-1 row-cols-md-3 g-2">
                    {
                        artists.map(artist => <Artist
                            artist={artist}
                        />)
                    }
                </div>
                </div>
                <div className="cart-container">
                    <h1>hello</h1>
                </div>
            </div>
        </div>
    );
};

export default Artists;