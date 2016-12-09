// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class Featured extends React.Component {
  constructor(props) {
     super(props);
  }

 render() {
    return (
      <h1>Hellow</h1>
    );
  }
}
