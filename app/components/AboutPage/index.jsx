import React, { Component } from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about container">
        <Helmet
          title="About"
          meta={[
            { "name": "description", "content": "About page component" },
            { "property": "og:type", "content": "article" }
          ]} />
        <h1>About</h1>
        <Link to="/">Go to Home page</Link>
      </div>
    );
  }
}
