import React from 'react';
import './information.css';

function Information (props) {
  return (
    <section className="container">
      { props.weatherdata.city === undefined 
      ? 
        <article className="weather">
          { props.weatherdata.error 
          ? 
          <div>
            <h2 className="weather__data--loading">Error.</h2>
            <h3 className="weather__data--loading error">Please check your input - The city entered cannot be found.</h3>
          </div>
          :
          <div>
            <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
            <h2 className="weather__data--loading">...loading</h2> 
          </div>
          }
        </article>
      : 
        <article className="weather">
          <div className="weather__data weather__data--title">
            <h2 className="weather__data--city">{props.weatherdata.city} ({props.weatherdata.country})</h2>
          </div>
          <div className="weather__data">
            <img src={props.weatherdata.icon} alt="weather icon" className="weather__data--icon"/>
          </div>
          <div className="weather__data weather__data--info">
            <div className="weather__info">
              <h3 className="weather__info--title">Type:</h3>
              <h4 className="weather__info--data">{props.weatherdata.weather}</h4>
            </div>
            <div className="weather__info">
              <h3 className="weather__info--title">Temperature:</h3>
              <h4 className="weather__info--data">{props.weatherdata.temperature} °C</h4>
            </div>
            <div className="weather__info">
              <h3 className="weather__info--title">Wind:</h3>
              <h4 className="weather__info--data">{props.weatherdata.wind} m/sec</h4>
            </div>
            <div className="weather__info">
              <h3 className="weather__info--title">Humidity:</h3>
              <h4 className="weather__info--data">{props.weatherdata.humidity} %</h4>
            </div>
          </div>
        </article>
      }
    </section>
  );
}

export default Information;