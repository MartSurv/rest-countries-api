import { combineReducers } from "redux";

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return action.payload;

    default:
      return state;
  }
};

const selectedCountryReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_COUNTRY":
      return action.payload;

    case "FETCH_COUNTRY":
      return action.payload[0];
    default:
      return state;
  }
};

const selectedRegionReducer = (state = "All", action) => {
  if (action.type === "SWITCH_REGION") {
    return action.payload;
  }
  return state;
};

const selectedThemeReducer = (state = "light", action) => {
  if (action.type === "CHANGE_THEME") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  allCountries: countriesReducer,
  selectedCountry: selectedCountryReducer,
  selectedRegion: selectedRegionReducer,
  selectedTheme: selectedThemeReducer,
});
