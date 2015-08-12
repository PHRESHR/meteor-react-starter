import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import './HomePage.css';

// settings util example
// import settings from 'utils/settings';
// console.log('Meteor Settings', settings);

export default class HomePage extends Component {
  render() {
    return (
      <div className="home container">
        <Helmet
          title="Home"
          meta={[
            { "name": "description", "content": "Home page component" },
            { "property": "og:type", "content": "article" }
          ]} />
        <h1>Home</h1>
        <Link to="about">Go to About page</Link>
      </div>
    );
  }
}
