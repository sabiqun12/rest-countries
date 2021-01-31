import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const[country, setCountry] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countryData => setCountry(countryData))
            //console.log(data))

    }, [])
   console.log(country);
    return (
        <div>
             {
                country.map( countries => <Country countries={country} key={countries.numericCode}></Country>)
            } 
        </div>
    );
};

export default Home;