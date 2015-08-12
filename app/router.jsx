import React from 'react';
import HashHistory from 'react-router/lib/HashHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Root from './containers/Root';

const root = document.getElementById('root');

let history;
try {
  history = new BrowserHistory();
} catch (ex) {
  history = new HashHistory();
}
// Meteor.startup(() => {
//   React.render((
//     <Root history={history} />
//   ), root);
// });
React.render((
  <Root history={history} />
), root);
