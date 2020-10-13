import axios from 'axios';
import _ from 'lodash';

export const fetchCountries = () => (dispatch) => {
  _fetchCountries(dispatch);
};

const _fetchCountries = _.memoize(async (dispatch) => {
  const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

  dispatch({ type: 'FETCH_COUNTRIES', payload: data });
});

export const fetchCountry = (name) => async (dispatch) => {
  const { data } = await axios.get(
    `https://restcountries.eu/rest/v2/name/${name}`
  );

  dispatch({ type: 'FETCH_COUNTRY', payload: data });
};

export const selectCountry = (country) => {
  return { type: 'SELECT_COUNTRY', payload: country };
};

export const selectRegion = (region) => {
  return { type: 'SWITCH_REGION', payload: region };
};
