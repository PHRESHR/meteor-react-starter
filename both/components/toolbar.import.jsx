import MainNav from '../components/navigation';

const Toolbar = React.createClass({
  render() {
    let brand = (
      <a href="/">
        <h1 className="brand">PHRESHR</h1>
      </a>
    );
    let menu = (
      <nav>
        <MainNav />
      </nav>
    );
    let toolbar = (
      <header>
        { brand }
        { menu }
      </header>
    );
    return toolbar;
  }
});

export default Toolbar;
