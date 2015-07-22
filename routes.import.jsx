import Layout from 'components/Layout/Layout';
import AppNotFound from 'components/AppNotFound/AppNotFound';
import Home from 'components/Home/Home';
import About from 'components/About/About';

FlowRouter.route('/', {
  subscriptions() {
    this.register('posts', Meteor.subscribe('posts'));
  },
  action() {
    console.log('Home Page rendered');
    ReactLayout.render(Layout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/about', {
  subscriptions() {
  },
  action() {
    console.log('About Page rendered');
    ReactLayout.render(Layout, {
      content: <About />
    });
  }
});

FlowRouter.notFound = {
  subscriptions() {},
  action() {
    console.log('404 Page rendered');
    ReactLayout.render(Layout, {
      content: <AppNotFound />
    });
  }
};
