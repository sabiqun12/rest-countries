import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const[countryinfo, setCountryinfo] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountryinfo(data))
            //console.log(data))

    }, [])
   //console.log(country);
    return (
        <div>
             {
                countryinfo.map( info => <Country info={info} key={info.numericCode}></Country>)
            } 
        </div>
    );
};

export default Home;