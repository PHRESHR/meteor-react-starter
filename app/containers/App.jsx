import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  render() {
    return (
      <div className="AppContainer">
        <Helmet
          titleTemplate="%s | PHRESHR"
          meta={[
            { "name": "description", "content": "App container" },
            { "property": "og:type", "content": "article" }
          ]} />
        <Toolbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}
