import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import CountryDetails from './CountryDetails';
import Header from './Header';

class App extends Component {
  render() {
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
}

export default App;
