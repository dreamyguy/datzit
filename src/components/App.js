// Import dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForkMeOnGithub from 'fork-me-on-github';

// Import components
import Header from './Layout/Header/Header';
import Sidebar from './Layout/Sidebar/Sidebar';
import Error from './Primitives/Error/Error';
import Footer from './Layout/Footer';

class App extends Component {
  render () {
    return (
      <div className="site h-100pc">
        <ForkMeOnGithub repo="https://github.com/dreamyguy/moments" isPride/>
        <Header/>
        <div>
          <div className="sidebar__wrapper h-100pc">
            <Sidebar/>
          </div>
          <div className="page">
            <div className="row">
              <div className="col-12">
                <div className="container p-t-20 p-b-20">
                  <Error/>
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
