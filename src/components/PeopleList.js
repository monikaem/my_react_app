import React, {useContext} from 'react';
import {AppContext} from "../AppContext";
import Person from "./Person";

const PeopleList = () => {
    const { people } = useContext(AppContext);

    const peopleList = people.map(person => <Person key={person.login.uuid} person={person}></Person>)

    return (
        <div>
            {peopleList}
        </div>
    )
}

export default PeopleList;