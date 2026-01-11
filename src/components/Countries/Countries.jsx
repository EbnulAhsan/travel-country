import React, { useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countries, handleVisitedFlags }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleAddVisitedCountry = (country) => {
        if (visitedCountries.find(c => c.cca3 === country.cca3)) return;
        setVisitedCountries([...visitedCountries, country]);
        handleVisitedFlags(country.flags.png);
    };

    const handleRemoveVisitedCountry = (country) => {
        const remaining = visitedCountries.filter(c => c.cca3 !== country.cca3);
        setVisitedCountries(remaining);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Total Countries: {countries.length}</h2>
            <h3 style={{ textAlign: 'center' }}>Visited Countries: {visitedCountries.length}</h3>

            <div className="countries">
                {countries.length > 0 ? (
                    countries.map(country => (
                        <Country
                            key={country.cca3}
                            country={country}
                            handleAddVisitedCountry={handleAddVisitedCountry}
                            handleRemoveVisitedCountry={handleRemoveVisitedCountry}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>No countries found.</p>
                )}
            </div>
        </div>
    );
};

export default Countries;
