import React, { PropTypes } from 'react';
import DashboardWidget from '../components/DashboardWidget';

// Simple example of a React "smart" component
export default class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.log(this.props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    // this.state = { projects: this.props.projects };
  }


  render() {
    return (
      <div>
        <DashboardWidget projects={this.state} />
      </div>
    );
  }
}
