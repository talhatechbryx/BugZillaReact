import React, { PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import EachProject from '../components/EachProject';
import ListingComponent from '../components/ListingComponent';
import ProjectShowComponent from '../components/ProjectShowComponent';
// Simple example of a React "smart" component
export default class Dashboard extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      projects: this.props.projects };
  }

  render() {
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard}></Route>
    </Router>

    return (
      <div>
        <ListingComponent projects={this.props.projects}/>
      </div>
    );
  }
}
