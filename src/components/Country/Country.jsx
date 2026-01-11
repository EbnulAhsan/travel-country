import React, { useState } from 'react';
import './country.css';

const Country = ({ country, handleAddVisitedCountry, handleRemoveVisitedCountry }) => {
    const [visited, setVisited] = useState(false);

    const handleVisitedToggle = () => {
        if (!visited) {
            setVisited(true);
            handleAddVisitedCountry(country);
        } else {
            setVisited(false);
            handleRemoveVisitedCountry(country);
        }
    };

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt={country.name.common} width="100" />
            <p>Population: {country.population}</p>
            <button onClick={handleVisitedToggle}>
                {visited ? 'Visited' : 'Visit'}
            </button>
        </div>
    );
};

export default Country;
