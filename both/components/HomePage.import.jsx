export default React.createClass({
  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
  },
  render () {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
});
