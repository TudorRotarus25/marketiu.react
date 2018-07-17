import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter
          forceRefresh={true}
        >
          <Layout/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
