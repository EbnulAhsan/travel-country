import { useState } from 'react';
import Countries from './components/Countries/Countries';
import countryData from './data/countries.json';

function App() {
  const [visitedFlags, setVisitedFlags] = useState([]);
  const [search, setSearch] = useState('');

  const handleVisitedFlags = (flag) => {
    if (!visitedFlags.includes(flag)) {
      setVisitedFlags([...visitedFlags, flag]);
    }
  };

  const filteredCountries = countryData.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>🌍 Travel Country Tracker</h1>

      <input
        type="text"
        placeholder="Search country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '5px', width: '200px' }}
      />

      <Countries
        countries={filteredCountries}
        handleVisitedFlags={handleVisitedFlags}
      />

      <h3 style={{ textAlign: 'center' }}>Visited Flags</h3>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag} alt="visited flag" width="60" />
        ))}
      </div>
    </div>
  );
}

export default App;











// import Countries from './components/Countries/Countries';
// import countryData from './data/countries.json';

// function App() {
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>🌍 Travel Country Tracker</h1>
//       <Countries countries={countryData} />
//     </div>
//   );
// }

// export default App;
