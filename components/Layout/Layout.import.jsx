import TopBar from 'components/TopBar/TopBar';
import Footer from 'components/Footer/Footer';

export default React.createClass({
  mixins: [ReactMeteorData],
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
        { this.props.content }
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
