import './CountryDetails.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountry } from '../actions';

function CountryDetails({ country, allCountries, match, fetchCountry }) {
  useEffect(() => {
    fetchCountry(match.params.country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.country]);

  const renderLanguages = () => {
    return country.languages.map((language) => {
      return <span>{`${language.name} `}</span>;
    });
  };

  const renderCurrencies = () => {
    return country.currencies.map((currency) => {
      return <span>{`${currency.name} `}</span>;
    });
  };

  const renderPopulation = () => {
    return country.population.toLocaleString();
  };

  const renderBorderCountries = () => {
    const borderCountryNames = [];

    allCountries.forEach((ctr) => {
      country.borders.forEach((border) => {
        if (ctr.alpha3Code === border) {
          borderCountryNames.push(ctr.name);
        }
      });
    });
    return borderCountryNames;
  };

  if (!country) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <div className="btn-box">
          <Link to="/" className="btn">
            <svg className="btn__icon">
              <use xlinkHref="sprite.svg#icon-keyboard_backspace"></use>
            </svg>
            Back
          </Link>
        </div>
        <div className="country">
          <div className="country__image-box">
            <img className="country__image" src={`${country.flag}`} alt="" />
          </div>
          <div className="country__description">
            <div className="country__title">
              <h1>{country.name}</h1>
            </div>
            <div className="country__details">
              <p>
                Native Name: <span>{country.nativeName}</span>
              </p>
              <p>
                Population: <span>{renderPopulation()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{country.topLevelDomain[0]}</span>
              </p>
              <p>
                Currencies: <span>{renderCurrencies()}</span>
              </p>
              <p>Languages: {renderLanguages()}</p>
            </div>
            <div className="country__borders">
              <h2>Border Countries:</h2>
              {renderBorderCountries().map((borderCountry) => {
                return (
                  <Link to={`/${borderCountry}`}>
                    <div className="country__border">{borderCountry}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { country: state.selectedCountry, allCountries: state.allCountries };
};

export default connect(mapStateToProps, { fetchCountry })(CountryDetails);
