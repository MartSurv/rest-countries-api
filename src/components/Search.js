import './Search.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CountryList from './CountryList';
import { fetchCountries } from '../actions';
import _ from 'lodash';

function Search({ fetchCountries, data }) {
  const [term, setTerm] = useState('');
  const [res, setRes] = useState([]);

  // Run at initial render
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

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
        <p>Filter</p>
      </div>
      <CountryList data={term === '' ? data : res} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.allCountries };
};

export default connect(mapStateToProps, { fetchCountries })(Search);
