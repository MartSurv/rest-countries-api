import React, { useState, useEffect } from "react";
import _ from "lodash";
import Select from "react-select";
import { connect } from "react-redux";

import { selectRegion } from "../actions";

import CountryList from "./CountryList";
import "./Search.css";

function Search({ data, selectRegion, selectedTheme }) {
  const [term, setTerm] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    if (data) {
      const resArr = data.filter((country) => {
        if (_.lowerCase(country.name).includes(_.lowerCase(term))) {
          return country;
        }
        return null;
      });
      setRes(resArr);
    }
  }, [data, term]);

  const options = [
    { value: "All", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const customStyles = {
    control: (styles) => ({
      ...styles,
      border: "none",
      borderRadius: 5,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      padding: 8,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: selectedTheme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: selectedTheme === "light" ? "#8e8e8e" : "hsl(0, 0%, 100%)",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    input: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: selectedTheme === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    }),
    menu: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: selectedTheme === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
      backgroundColor: selectedTheme === "light" ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)",
    }),
    option: (styles, { isSelected }) => ({
      ...styles,
      color: isSelected
        ? "hsl(0, 0%, 100%)"
        : selectedTheme === "light"
        ? "hsl(200, 15%, 8%)"
        : "hsl(0, 0%, 100%)",
    }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: selectedTheme === "light" ? "#8e8e8e" : "hsl(0, 0%, 100%)",
    }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: 14,
      fontWeight: 600,
      color: selectedTheme === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)",
    }),
  };

  return (
    <React.Fragment>
      <div className="search">
        <input
          className="search__search-bar"
          type="text"
          placeholder="Search for a country..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <svg className="search__icon">
          <use xlinkHref="sprite.svg#icon-search"></use>
        </svg>
        <Select
          className="search__select-menu"
          styles={customStyles}
          options={options}
          placeholder="Filter by Region"
          onChange={(e) => selectRegion(e.value)}
        />
      </div>
      <CountryList data={term === "" ? data : res} />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { data: state.allCountries, selectedTheme: state.selectedTheme };
};

export default connect(mapStateToProps, { selectRegion })(Search);
