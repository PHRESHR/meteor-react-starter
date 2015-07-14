import Layout from 'components/App/App';

// import paths are absolute to app root

import HomePage from 'components/HomePage/HomePage';
import NotFound from 'components/NotFound/NotFound';

FlowRouter.route('/', {
  subscriptions() {
    this.register('posts', Meteor.subscribe('posts'));
  },
  action() {
    ReactLayout.render(Layout, {
      content: <HomePage />
    });
  }
});

FlowRouter.notFound = {
  subscriptions() {},
  action() {
    ReactLayout.render(Layout, {
      content: <NotFound />
    });
  }
};
