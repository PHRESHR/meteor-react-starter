import App from 'client/components/App/App';
import AppNotFound from 'client/components/AppNotFound/AppNotFound';
import Home from 'client/components/Home/Home';
import About from 'client/components/About/About';

const {
  Route,
  NotFoundRoute,
  DefaultRoute
} = ReactRouter;

const routes = (
  <Route name="home" handler={App} path="/">
    <Route name="about" path="/about" handler={About} />
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={AppNotFound} />
  </Route>
);

const router = ReactRouter.create({
  routes,
  location: ReactRouter.HistoryLocation
});

Meteor.startup(function () {
  injectTapEventPlugin();
  router.run(function (Handler, state) {
    React.render(<Handler/>, document.getElementById('container'));
  });
});
