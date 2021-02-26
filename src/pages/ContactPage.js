import React, {useContext, useEffect} from 'react';
import {AppContext} from "../AppContext";
import PeopleList from "../components/PeopleList";
import '../styles/ContactPage.css'

const ContactPage = () => {
    const { addPeopleFromAPI, peopleFetched, dataFetchedOrNot} = useContext(AppContext);

    const fetchData = () => {
        if (!peopleFetched) {
            fetch('https://randomuser.me/api/?results=8')
                .then(response => {
                    if (response.ok) {
                        return response;
                    }
                    throw Error(response.status)
                })
                .then(response => response.json())
                .then(data => {
                    const peopleFromAPI = data.results;
                    addPeopleFromAPI(peopleFromAPI);
                    dataFetchedOrNot();
                });
        }
    }

        useEffect(fetchData, [])



    return (
        <div className="peopleContainer">
            <h1>Nasza ekipa specjalistów</h1>
            <div className="underline"></div>
            <PeopleList/>
        </div>
    )
}

export default ContactPage;