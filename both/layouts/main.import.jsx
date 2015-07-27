import Toolbar from '../components/toolbar';
import Footer from '../components/footer';
export default React.createClass({
  render() {
    let toolbar = (
      <Toolbar />
    );
    let content = (
      <main>
        { this.props.content }
      </main>
    );
    let footer = (
      <Footer />
    );
    let appCanvas = (
      <div className="wrap">
        { toolbar }
        { content }
        { footer }
      </div>
    );
    return appCanvas;
  }
});
