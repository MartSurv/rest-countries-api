import './CountryCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCountry } from '../actions';

function CountryCard({ country, selectCountry }) {
  const renderPopulation = () => {
    return country.population.toLocaleString();
  };

  return (
    <div>
      <Link to={`${country.name}`} className="card">
        <div
          className="fade-in-fwd card"
          onClick={() => selectCountry(country)}
        >
          <div className="card__image-box">
            <img className="card__image" src={`${country.flag}`} alt="" />
          </div>
          <div className="card__content">
            <div className="card__title">
              <h2>{country.name}</h2>
            </div>
            <div className="card__description">
              <p>
                Population: <span>{renderPopulation()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default connect(null, { selectCountry })(CountryCard);
