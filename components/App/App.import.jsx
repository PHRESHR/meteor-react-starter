export default class App extends React.Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    let navBar = (
      <nav>
        <a href="/">Tomorrow Pictures</a>
        <ul className="nav navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="#">Another Link</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="http://tomorrowpictures.com" target="_blank">Visit Tomorrow Pictures Inc.</a></li>
        </ul>
      </nav>
    );
    let mainContent = (
      <main>
        { this.props.content }
      </main>
    );
    let appCanvas = (
      <div className="wrap">
        { navBar }
        { mainContent }
      </div>
    );
    return appCanvas;
  }
}
