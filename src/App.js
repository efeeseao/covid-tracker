import React, { Component } from 'react';

import { Cards, Chart, Country } from './components';

import './App.css';

import ImageLogo from './assets/logo.jpg';

import Header from './components/Header';

import { fetchData } from './services/api';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
  
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <Header />
        <img src={ImageLogo} alt="Covid"/> 
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;