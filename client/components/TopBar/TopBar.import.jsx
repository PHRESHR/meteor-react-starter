import MainNav from 'client/components/MainNav/MainNav';

export default class Header extends React.Component {
  constructor(props) {
    super(...arguments);
  }
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
