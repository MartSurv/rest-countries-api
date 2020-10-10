import axios from 'axios';
import _ from 'lodash';

export const fetchCountries = () => (dispatch) => {
  _fetchUser(dispatch);
};

const _fetchUser = _.memoize(async (dispatch) => {
  const { data } = await axios.get('https://restcountries.eu/rest/v2/all');

  dispatch({ type: 'FETCH_COUNTRIES', payload: data });
});

export const selectCountry = (country) => {
  return { type: 'SELECT_COUNTRY', payload: country };
};
