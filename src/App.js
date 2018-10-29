import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RidesView from './pages/RidesView';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/rides" component={RidesView} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)

export default App;
