import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, population, flag, region, capital, alpha2Code } = props.info;
    console.log(props.info);

   const stcountries = {
        border : '1px solid',
        margin: '50px',
        padding: '30px'
    };

    return (
        
        <div style={stcountries}>
                <img src={flag} alt="" display="block" margin-left="auto" margin-right="auto" width="50%"/>  
                <h3>Name:{name}</h3>
                <h4>Population:{population}</h4> 
                <h5>Region:{region}</h5>
                <h6>Capital: {capital}</h6>
                <p>Id: <Link to={`/countryName/${alpha2Code}`}>Details Here: {alpha2Code}</Link> </p>
             
        </div>
    );
};

export default Country;