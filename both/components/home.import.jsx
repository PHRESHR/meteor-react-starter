import PostList from '../components/post_list';

const HomePage = React.createClass({
  render () {
    let postList = (
      <PostList />
    );
    let homePage = (
      <section>
        <h2>Meteor React Starter</h2>
        { postList }
      </section>
    );
    return homePage;
  }
});

export default HomePage;
