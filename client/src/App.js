import React from 'react';
import './App.css';
import Information from './components/information/information';
import Form from './components/form/form';

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = { 
    value: '',
    weatherdata: '',
    latitude: '',
    longitude: '',
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.sendLocation = this.sendLocation.bind(this);
}

componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
      success => this.setState({ latitude: success.coords.latitude, longitude: success.coords.longitude })
  );
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.latitude !== this.state.latitude) {
    this.sendLocation();
  }
}

sendLocation() {
  const data =  this.state;

  fetch('/api/nearby', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => this.setState({ weatherdata: data }))
}

handleChange(e) {
  this.setState({ value: e.target.value });
}

handleSubmit(e) {
  e.preventDefault();
  const data = this.state;

  fetch('/api/weather', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => this.setState({ weatherdata: data }))
}

  render() {
    return (
      <>
      <header className="header">
        <h1 className="header__title">Daily.Weather</h1>
        <div className="header__item">
          <img src="http://openweathermap.org/img/wn/02d.png" alt="weather icon"/>
          <a href="/" className="home__link"><h3 className="nearby__link">Nearby</h3></a>
        </div>
      </header>
      <main>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
        <Information weatherdata={this.state.weatherdata}/>
      </main>
      </>
    );
  }
}

export default App;
