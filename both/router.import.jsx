import MainLayout from 'both/layouts/Main';
import PostList from 'both/components/PostList';
import PostPage from 'both/components/PostPage';

FlowRouter.route('/', {
  name: 'home',
  action() {
    ReactLayout.render(MainLayout, {
      content: <PostList />
    });
  }
});

FlowRouter.route('/post/:_id', {
  name: 'post',
  action(params) {
    ReactLayout.render(MainLayout, {
      content: <PostPage _id={params._id} />
    });
  }
});
