import './CountryDetails.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  const renderLanguages = () => {
    return props.country.languages.map((language) => {
      return <span>{`${language.name} `}</span>;
    });
  };

  const renderCurrencies = () => {
    return props.country.currencies.map((currency) => {
      return <span>{`${currency.name} `}</span>;
    });
  };

  const renderPopulation = () => {
    return props.country.population.toLocaleString();
  };

  return (
    <div>
      <Link to="/">
        <div className="btn-box">
          <button className="btn">Back</button>
        </div>
      </Link>
      <div className="country">
        <div className="country__image-box">
          <img
            className="country__image"
            src={`${props.country.flag}`}
            alt=""
          />
        </div>
        <div className="country__description">
          <div className="country__title">
            <h1>{props.country.name}</h1>
          </div>
          <div className="country__details">
            <p>
              Native Name: <span>{props.country.nativeName}</span>
            </p>
            <p>
              Population: <span>{renderPopulation()}</span>
            </p>
            <p>
              Region: <span>{props.country.region}</span>
            </p>
            <p>
              Sub Region: <span>{props.country.subregion}</span>
            </p>
            <p>
              Capital: <span>{props.country.capital}</span>
            </p>
            <p>
              Top Level Domain: <span>{props.country.topLevelDomain[0]}</span>
            </p>
            <p>
              Currencies: <span>{renderCurrencies()}</span>
            </p>
            <p>Languages: {renderLanguages()}</p>
          </div>
          <div className="country__borders">
            <h2>Border Countries:</h2>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { country: state.selectedCountry };
};

export default connect(mapStateToProps)(CountryDetails);
