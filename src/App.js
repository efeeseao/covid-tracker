import React, { Component } from 'react';

import { Cards, Chart, Country } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Country />
        <Chart />
      </div>
    )
  }
}

export default App;