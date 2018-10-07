import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

class App extends React.Component {
  render () {
    return (
      <LandingPage />
    );
  }
}

export default App;
