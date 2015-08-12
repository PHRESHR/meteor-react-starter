import React, { Component } from 'react';
import { Link } from 'react-router';
import './Toolbar.css';

export default class Toolbar extends Component {
  render() {
    return (
      <header className="Toolbar">
        <div className="brand">
          <Link to="/">PHRESHR</Link>
        </div>
      </header>
    );
  }
}
