import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import CountryDetails from './CountryDetails';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';

function App({ fetchCountries, allCountries }) {
  // Run at initial render
  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(allCountries);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route path="/" exact component={Search} />
          <Route path="/:country" exact component={CountryDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { allCountries: state.allCountries };
};

export default connect(mapStateToProps, { fetchCountries })(App);
