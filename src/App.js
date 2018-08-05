import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import HomePage from  './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import ProeficienctRegister from './pages/ProeficiencyRegister';

export class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <main>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/skills" component={ProeficienctRegister} />
                <Route component={NotFoundPage} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect()(App);
