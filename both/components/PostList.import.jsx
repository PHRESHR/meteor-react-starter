export default React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    const selector = { category: { $ne: 'private' } };
    const handle = Meteor.subscribe('posts', selector);
    const data = {};
    if (handle.ready()) {
      data.posts = Posts.find({}, { sort: { _id: 1 } }).fetch();
    }

    return data;
  },
  getList() {
    const title = 'Home';
    DocHead.setTitle(title);
    const metaInfo = { name: 'description', content: 'React with Proper Meteor Integration' };
    DocHead.addMeta(metaInfo);
    console.log('Title: ' + title);
    Array.prototype.concatAll = () => {
      const results = [];
      this.forEach(subArray => {
        subArray.forEach(item => {
          results.push(item);
        });
      });
      return results;
    };
    [ 1, 2, 3, 4 ].forEach(x => console.log(x));
    const mapFunc = [ 1, 2, 3, 4 ].map(x => x + 1);
    const filterFunc = [ 1, 2, 3, 4 ].filter(x => x > 1);
    console.log(mapFunc);
    console.log(filterFunc);
    return (
      <ul>
        {this.data.posts.map((post) => {
          const path = FlowRouter.path('post', { _id: post._id });
          return <li key={post._id}><a href={path}>{post.title}</a></li>;
        })}
      </ul>
    );
  },
  render() {
    return (
      <div>
        This is the post list
        {(this.data.posts) ? this.getList() : 'loading...'}
      </div>
    );
  }
});
