import React, { Component } from 'react';
import {Link} from 'react-router';

const propTypes = {
};

const defaultProps = {
};

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div className="home1">
        <span>This is Home 1</span>
        <Link to="home2">Go to Home 2</Link>
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;
