import React, { useEffect, useState } from 'react';
import AddName from '../AddedName/AddName';
import Artist from '../Artist/Artist';
import './Artists.css'

const Artists = () => {
    // data load state
    const [artists, setArtists] = useState([])
    // person add state
    const [added, setAdded] = useState([])

    useEffect(() => {
        fetch('./artist.json')
            .then(res => res.json())
            .then(data => setArtists(data))
    }, [])

    // Add AddName handle function

    const handleAddToAddName = (person) => {
        const newPerson = [...added, person]
        setAdded(newPerson)
    }
    return (
        <div>
            <div className="artists-and-cart-container">
                <div className="">
                    <div className="artist-container row row-cols-1 row-cols-md-3 g-3">
                        {
                            artists.map(artist => <Artist
                                key={artist.id}
                                artist={artist}
                                handleAddToAddName={handleAddToAddName}
                            />)
                        }
                    </div>
                </div>
                <div className="addName-container">
                    <AddName added={added} />
                </div>
            </div>
        </div>
    );
};

export default Artists;