import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Router, Route, hashHistory } from 'react-router';

import Dashboard from '../containers/Dashboard';

const DashboardApp = (projects) => (
  <Dashboard {...projects} />
);
ReactOnRails.register({ DashboardApp });
// This is how react_on_rails can see the HelloWorldApp in the browser.

