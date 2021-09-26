import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './Artist.css'

const Artist = (props) => {
    const { name, img, bio, date, institue, price } = props.artist
    return (
        <div>
            <div className="col h-100">
                <div className="single-artist p-3 card h-100">
                    <img className="artist-img mb-3" src={img} alt="..." />
                    <div >
                        <h5 className="full-name">Name : {name}</h5>
                        <p>Institute : {institue}</p>
                        <p >Bio : {bio.slice(0, 98)}</p>
                        <h6>Date Of Birth : {date}</h6>
                        <h5>Cost : <FontAwesomeIcon icon={faDollarSign} /> {price}</h5>
                        <button onClick={() => props.handleAddToAddName(props.artist)} className="btn style-buy-button"><FontAwesomeIcon icon={faUserPlus} /> Add Person</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Artist;