import './Search.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import CountryList from './CountryList';
import { selectRegion } from '../actions';
import _ from 'lodash';

function Search({ data, selectRegion }) {
  const [term, setTerm] = useState('');
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (data) {
      const resArr = data.filter((country) => {
        if (_.lowerCase(country.name).includes(term)) {
          return country;
        }
        return null;
      });
      setRes(resArr);
    }
  }, [data, term]);

  const options = [
    { value: 'All', label: 'All' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
    }),
    control: (styles) => ({
      ...styles,
      border: 'none',
      borderRadius: 10,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      padding: 8,
      paddingTop: 10,
      paddingBottom: 10,
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: 'hsl(200, 15%, 8%)',
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: 'hsl(200, 15%, 8%)',
    }),

    menu: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: 'hsl(200, 15%, 8%)',
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: 'hsl(200, 15%, 8%)',
    }),
    input: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: 'hsl(200, 15%, 8%)',
    }),
  };

  return (
    <div>
      <div className="search">
        <input
          className="search__search-bar"
          type="text"
          placeholder="Search for a country..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Select
          className="search__select-menu"
          styles={customStyles}
          options={options}
          placeholder="Filter by Region"
          onChange={(e) => selectRegion(e.value)}
        />
      </div>
      <CountryList data={term === '' ? data : res} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.allCountries };
};

export default connect(mapStateToProps, { selectRegion })(Search);
