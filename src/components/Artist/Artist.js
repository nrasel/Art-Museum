import React from 'react';
import './Artist.css'

const Artist = (props) => {
    // console.log(props.artist)
    // console.log(props)
    const { name, img,bio,date,institue,price } = props.artist
    return (
        <div>
            <div className="col h-100">
                <div className="single-artist p-3 card h-100">
                    <img className="artist-img mb-3" src={img} alt="..." />
                    <div >
                        <h5 className="full-name"><strong>Name:</strong>   {name}</h5>
                        <p><strong>Institue:</strong> {institue}</p>
                        <p ><strong>Bio:</strong> {bio.slice(0,98)}</p>
                        <p><strong>Date Of Birth:</strong> {date}</p>
                        <h5><strong>Cost:</strong> ${price}</h5>
                        <button onClick={()=>props.handleAddToAddName(props.artist)} className="btn style-buy-button">Select</button>
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default Artist;