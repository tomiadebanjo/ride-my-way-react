import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RidesView from './pages/RidesView';
import Dashboard from './pages/Dashboard';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/rides" component={RidesView} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)

export default App;
