// Get year with vanilla javascript
// const year = (new Date()).getFullYear();

// Get year with moment.js
const year = moment().year();

const Footer = React.createClass({
  render() {
    let props = this.props;
    let CopyRight = (
      <p>
        &copy; { year } PHRESHR Media, All Rights Reserved.
      </p>
    );
    let SiteFooter = (
      <footer>
        { CopyRight }
      </footer>
    );
    return SiteFooter;
  }
});

export default Footer;
