import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

// Components
import Home from './components/Home.jsx';
import Home2 from './components/Home2.jsx';

import './styles/app.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Home }/>
        <Route path="/home2" component={ Home2 }/>
      </Router>
    );
  }
}

export default App;
