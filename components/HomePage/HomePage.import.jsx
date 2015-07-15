import { Jumbotron, Button } from 'bootstrap';

export default React.createClass({
  render() {
    return (
      <Jumbotron>
        <h2>Tomorrow Pictures Jumbotron example</h2>

        <p>Main reason of this welcome screen is to have some routing :)</p>

        <a href="#">
          <Button bsStyle='primary'>Click Me</Button>
        </a>
      </Jumbotron>
    );
  }
});
