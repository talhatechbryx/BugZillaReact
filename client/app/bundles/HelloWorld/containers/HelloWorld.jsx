import React, { PropTypes } from 'react';
import HelloWorldWidget from '../components/HelloWorldWidget';

// Simple example of a React "smart" component
export default class Dashboard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { projects: this.props.projects };
  }

  updateName(projects) {
    this.setState({ projects });
  }

  render() {
    return (
      <div>
        <HelloWorldWidget name={this.state.name} updateName={e => this.updateName(e)} />
      </div>
    );
  }
}
