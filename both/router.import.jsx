import Main from './layouts/main';
import HomePage from './components/home';
import PostList from './components/post_list';
import PostPage from './components/post_page';
import NotFound from './components/not_found';

FlowRouter.route('/', {
  name: 'home',
  subscriptions() {
    let selector = { category: { $ne: 'private' }};
    this.register('posts', Meteor.subscribe('posts', selector));
  },
  action() {
    ReactLayout.render(Main, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  subscriptions(params) {
    this.register('singlePost', Meteor.subscribe('singlePost', params._id));
  },
  action(params) {
    ReactLayout.render(Main, {
      content: <PostPage _id={ params._id } />
    });
  }
});

FlowRouter.notFound = {
  name: 'notFound',
  subscriptions() {},
  action() {
    console.log('404 Page rendered');
    ReactLayout.render(Main, {
      content: <NotFound />
    });
  }
};
