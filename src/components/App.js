import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCountries } from "../actions";

import Search from "./Search";
import CountryDetails from "./CountryDetails";
import Header from "./Header";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";

function App({ fetchCountries, selectedTheme }) {
  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={selectedTheme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <div className="container">
          <Route path="/" exact component={Search} />
          <Route path="/:country" exact component={CountryDetails} />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return { selectedTheme: state.selectedTheme };
};

export default connect(mapStateToProps, { fetchCountries })(App);
