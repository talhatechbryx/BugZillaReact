// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.
import DashboardWidget from '../components/DashboardWidget';
import EachProject from '../components/EachProject';
import React, { PropTypes } from 'react';
// Simple example of a React "dumb" component
export default class ListingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects
    };
    this.addRecord = this.addRecord.bind(this);
  }

  addRecord(project) {
    var records;
    records = this.state.projects.slice();
    records.push(project);
    return this.setState({
      projects: records
    });
  }

  render() {
    return (
      <div className="projects">
        <DashboardWidget handleNewRecord={this.addRecord} />
        <div className="project_table">
          <h2 className="title">Projects</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => <EachProject key={project.id} project={project} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
