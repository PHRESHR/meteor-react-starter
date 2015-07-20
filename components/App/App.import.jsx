export default class App extends React.Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div>
        <nav brand={<a href="/">Tomorrow Pictures</a>} staticTop={true}>
          <a href="/">Tomorrow Pictures</a>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#">Another Link</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="http://tomorrowpictures.com" target="_blank">Visit Tomorrow Pictures Inc.</a></li>
          </ul>
        </nav>
        <section>
          <div>
            { this.props.content }
          </div>
        </section>
      </div>
    );
  }
}
