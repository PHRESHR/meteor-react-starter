export default React.createClass({
  mixins: [ ReactMeteorData ],
  componentWillMount() {

  },
  getMeteorData() {
    const handle = Meteor.subscribe('singlePost', this.props._id);
    const data = {};
    if (handle.ready()) {
      data.post = Posts.findOne({ _id: this.props._id });
    }

    return data;
  },
  getContent() {
    const title = this.data.post.title;
    DocHead.setTitle(title);
    const metaInfo = { name: 'description', content: 'FlowRouter SSR is Awesome' };
    DocHead.addMeta(metaInfo);
    return (
      <div>
        <a href="/">Back</a>
        <h3>{this.data.post.title}</h3>
        <p>{this.data.post.content}</p>
      </div>
    );
  },
  render() {
    return (this.data.post) ? this.getContent() : <div>loading...</div>;
  }
});
