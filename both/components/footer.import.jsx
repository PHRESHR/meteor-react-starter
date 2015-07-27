// const year = (new Date()).getFullYear();
const year = '2015';

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
