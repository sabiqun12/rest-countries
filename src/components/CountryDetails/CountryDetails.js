import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
    const{counId} = useParams();

    const[details, setDetails] = useState({});

    useEffect( () => {
         const url = `https://restcountries.eu/rest/v2/alpha/${counId}`
         fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))

                

    }, [])
    console.log(details)
    return (
        <div>
            <p>Country details here: {counId}</p>
            <h3>Country Name: {details.name}</h3>
            <h4>Capital:{details.capital}</h4>
        </div>
    );
};

export default CountryDetails;