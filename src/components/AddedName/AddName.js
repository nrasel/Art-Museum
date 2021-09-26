import React from 'react';
import './AddName.css'

const AddName = (props) => {

    let totalCost = 0;

    for (let singlePerson of props.added) {
        totalCost = totalCost + singlePerson.price
    }

    const personName = []
    for (let person of props.added) {
        if (!personName.includes(person.name)) {
            personName.push(person.name)
        }
    }

    console.log(props.added)
    return (
        <div className="name-container">
            <h5>Person Added: {personName.length}</h5>
            <h5>Total Cost: ${totalCost}</h5>
            {
                personName.map(name => <li className="name-list mt-3" key={name}>{name}</li>)
            }
        </div>
    );
};

export default AddName;