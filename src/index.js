import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './redux/store/store';

// Import pages
import App from './components/App';
import About from './pages/About';
import Home from './pages/Home';
import StatsGlobal from './pages/StatsGlobal';
import StatsRepo from './pages/StatsRepo';
import StatsContributors from './pages/StatsContributors';

// Import styles
import './styles/main.scss';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/stats-global" component={StatsGlobal}/>
          <Route exact path="/stats-repo/:repoName/" component={StatsRepo}/>
          <Route exact path="/stats-contributors" component={StatsContributors}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
