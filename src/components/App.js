import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';
import CountryDetails from './CountryDetails';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Theme';

function App({ fetchCountries, selectedTheme }) {
  // Run at initial render
  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <div className="container" onScroll={(e) => console.log(e)}>
          <Route path="/" exact component={Search} />
          <Route path="/:country" exact component={CountryDetails} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return { selectedTheme: state.selectedTheme };
};

export default connect(mapStateToProps, { fetchCountries })(App);
