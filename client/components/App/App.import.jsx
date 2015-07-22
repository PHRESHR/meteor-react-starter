import TopBar from 'client/components/TopBar/TopBar';
import Footer from 'client/components/Footer/Footer';

const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

export default React.createClass({
  mixins: [ ReactMeteorData, Navigation, State ],
  getMeteorData() {
    return {
      //
    };
  },
  render() {
    let Header = (
      <TopBar />
    );
    let mainContent = (
      <main>
        <RouteHandler />
      </main>
    );
    let SiteFooter = (
      <Footer />
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
});
