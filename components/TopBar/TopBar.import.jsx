import MainNav from '../MainNav/MainNav';

export default class Header extends React.Component {
  static defaultProps() {
    items: [];
  };

  static propTypes() {
    items: React.PropTypes.array.isRequired;
  };
  render() {
    let Brand = (
      <a href="/">
        <h1 className={'brand'}>PHRESHR</h1>
      </a>
    );
    let Menu = (
      <nav>
        <MainNav />
      </nav>
    );
    let TopBar = (
      <header>
        { Brand }
        { Menu }
      </header>
    );
    return TopBar;
  }
}
