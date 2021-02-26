import React from 'react';
import '../styles/Person.css';

const Person = ({ person }) => {

    return (
        <div className="person">
            <figure><img src={person.picture.large}/>
                <figcaption>
                    <h4>{person.name.title} {person.name.first} {person.name.last}</h4>
                    <p>{person.email}</p>
                    <p>{person.cell} </p>
                </figcaption>
            </figure>

        </div>
    )
}

export default Person;