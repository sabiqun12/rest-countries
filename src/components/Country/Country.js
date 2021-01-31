import React from 'react';

const Country = (props) => {
    const { name, population, flag, region } = props.countries[0];
    console.log(props.countries[0]);

   // const styleCountries = {
    //     border : '1px solid',
    //     margin: '50px',
    //     padding: '30px'
    // };

    return (
        
        <div>
                <img src={flag} alt={name} />  
                <h3>Name:{name}</h3>
                <h4>Population:{population}</h4>
                <h5>Region:{region}</h5>
             
        </div>
    );
};

export default Country;