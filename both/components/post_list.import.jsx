export default React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      posts: Posts.find({}, { sort: { _id: 1 }}).fetch()
    };
  },
  render() {
    return (
      <div>
        This is the post list
        <ul>
          {this.data.posts.map((post) => {
            let path = FlowRouter.path('post', { _id: post._id });
            return <li key={post._id}><a href={path}>{post.title}</a></li>;
          })}
        </ul>
      </div>
    );
  }
});
