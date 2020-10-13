import './CountryList.css';
import React from 'react';
import CountryCard from './CountryCard';
import { connect } from 'react-redux';

function CountryList({ data, selectedRegion }) {
  const changeAlignment = () => {
    if (filteredData().length < 4) {
      return { justifyContent: 'start' };
    } else {
      return { justifyContent: 'space-between' };
    }
  };

  const filteredData = () => {
    if (selectedRegion === 'All') {
      return data;
    } else if (selectedRegion === 'Africa') {
      return data.filter((country) => country.region === selectedRegion);
    } else if (selectedRegion === 'Americas') {
      return data.filter((country) => country.region === selectedRegion);
    } else if (selectedRegion === 'Asia') {
      return data.filter((country) => country.region === selectedRegion);
    } else if (selectedRegion === 'Europe') {
      return data.filter((country) => country.region === selectedRegion);
    } else if (selectedRegion === 'Oceania') {
      return data.filter((country) => country.region === selectedRegion);
    }
  };

  if (data) {
    const countries = filteredData().map((country) => {
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

const mapStateToProps = (state) => {
  return { selectedRegion: state.selectedRegion };
};

export default connect(mapStateToProps)(CountryList);
