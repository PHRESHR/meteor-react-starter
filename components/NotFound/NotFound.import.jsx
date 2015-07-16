import { Jumbotron, Button } from 'bootstrap';

export default class NotFound extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h2>Page Not Found</h2>

        <p>Demonstrating Not Found Page</p>

        <a href="/">
          <Button bsStyle='primary'>Home</Button>
        </a>
      </Jumbotron>
    );
  }
}
