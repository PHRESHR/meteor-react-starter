export default React.createClass({
  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }
});
