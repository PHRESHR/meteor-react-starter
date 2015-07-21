import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

export default class App extends React.Component {
  constructor(...args) {
    super(...args);
  }
  static defaultProps() {
    items: [
      'Home'
    ];
  };

  static propTypes() {
    items: React.PropTypes.array.isRequired;
  };
  render() {
    let Header = (
      <TopBar></TopBar>
    );
    let mainContent = (
      <main>
        { this.props.content }
      </main>
    );
    let SiteFooter = (
      <Footer></Footer>
    );
    let appCanvas = (
      <div className="wrap">
        { Header }
        { mainContent }
        { SiteFooter }
      </div>
    );
    return appCanvas;
  }
}
