import { combineReducers } from 'redux';

const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return action.payload;

    default:
      return state;
  }
};

const selectedCountryReducer = (selectedCountry = null, action) => {
  if (action.type === 'SELECT_COUNTRY') {
    return action.payload;
  }
  return selectedCountry;
};

export default combineReducers({
  allCountries: countriesReducer,
  selectedCountry: selectedCountryReducer,
});
