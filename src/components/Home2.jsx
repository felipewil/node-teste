import React, { Component } from 'react';
import {Link} from 'react-router';

const propTypes = {
};

const defaultProps = {
};

class Home2 extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <div className="home2">
        <span>This is Home 2</span>
        <Link to="">Go to Home 1</Link>
      </div>
    );
  }
}

Home2.propTypes = propTypes;
Home2.defaultProps = defaultProps;

export default Home2;
