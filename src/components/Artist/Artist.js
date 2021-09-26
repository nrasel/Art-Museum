import React from 'react';
import './Artist.css'

const Artist = (props) => {
    console.log(props.artist)
    const { name, img,bio,shortname } = props.artist
    return (
        <div>
            <div className="col h-100">
                <div className="single-artist p-3 card h-100">
                    <img className="artist-img mb-3" src={img} alt="..." />
                    <div >
                        <h5 className="full-name"><strong>Name:</strong> {name}</h5>
                        <h5><strong>Short Name:</strong> {shortname}</h5>
                        <p ><strong>Bio:</strong> {bio.slice(0,100)}</p>
                        <button className="btn btn-primary">Select</button>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default Artist;