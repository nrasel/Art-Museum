import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './AddName.css'

const AddName = (props) => {


    const personName = []
    let totalCost = 0;
    for (let person of props.added) {
        if (!personName.includes(person.name)) {
            personName.push(person.name)
            totalCost = totalCost + person.price
        }
    }
    return (
        <div className="name-container">
            <h5><FontAwesomeIcon className="user-icon" icon={faUser} /> Person Added: {personName.length}</h5>
            <h5>Total Cost: ${totalCost}</h5>
            {
                personName.map(name => <li className="name-list mt-3" key={name}>{name}</li>)
            }
        </div>
    );
};

export default AddName;