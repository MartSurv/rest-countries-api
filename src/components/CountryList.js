import './CountryList.css';
import React from 'react';
import CountryCard from './CountryCard';

function CountryList({ data }) {
  const changeAlignment = () => {
    if (data.length < 4) {
      return { justifyContent: 'start' };
    } else {
      return { justifyContent: 'space-between' };
    }
  };

  console.log(data);
  if (data) {
    const countries = data.map((country) => {
      return <CountryCard key={country.alpha2Code} country={country} />;
    });
    return (
      <div className="country-list" style={changeAlignment()}>
        {countries}
      </div>
    );
  }
  return <div className="country-list"></div>;
}

export default CountryList;
