// Import dependencies
import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// Import utils
import * as serviceWorker from './serviceWorker';
// Import styles
import './styles/main.scss';
// Import components
import App from './components/App';
// Import pages
import About from './pages/About';
import Home from './pages/Home';
import StatsGlobal from './pages/StatsGlobal';
import StatsRepo from './pages/StatsRepo';
import StatsContributors from './pages/StatsContributors';

// Import store
import initStore from './store/store';

const store = initStore();

ReactDom.render((
  <Provider store={store}>
    <HashRouter basename="/">
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/stats-global" component={StatsGlobal}/>
          <Route path="/stats-repo/:repoName/" component={StatsRepo}/>
          <Route path="/stats-contributors" component={StatsContributors}/>
        </Switch>
      </App>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
