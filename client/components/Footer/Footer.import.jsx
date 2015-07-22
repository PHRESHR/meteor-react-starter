const year = (new Date()).getFullYear();
// const year = '2016';

export default class Footer extends React.Component {
  constructor(props) {
    super(...arguments);
  }
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
}
