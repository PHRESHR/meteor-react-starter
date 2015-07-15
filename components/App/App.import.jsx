import { Grid, Col, Row, Navbar } from 'bootstrap';

export default React.createClass({
  render() {
    return (
      <div>
        <Navbar brand={<a href="/">Tomorrow Pictures</a>} staticTop={true}>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#">Another Link</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="http://tomorrowpictures.com" target="_blank">Visit Tomorrow Pictures Inc.</a></li>
          </ul>
        </Navbar>
        <Grid>
          <Row>
            <Col sm={12}>
              { this.props.content }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});
