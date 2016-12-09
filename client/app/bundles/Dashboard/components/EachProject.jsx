import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ProjectShowComponent from '../components/ProjectShowComponent';

export default class EachProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: this.props.project,
      avatar: '',
      imageFile: null
    };
  }

  render() {

    return (
        <tr>
          <td><Link to={"projects/" + this.state.project.id}>{this.state.project.title}</Link></td>
          <td>{this.state.project.desc}</td>
          <td>
            <img className="preview-image" src={this.state.project.avatar + ".jpg"} ></img>
          </td>
        </tr>
    );
  }
}
