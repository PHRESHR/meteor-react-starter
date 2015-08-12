import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route component={App}>
          <Route name="home" path="/" component={HomePage} />
          <Route name="about" path="/about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    );
  }
}
