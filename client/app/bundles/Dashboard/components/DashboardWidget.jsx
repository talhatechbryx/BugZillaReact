// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dumb component names with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class DashboardWidget extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
      title: '',
      desc: '',
      avatar: '',
      imageFile: null
    };
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange = (e) => {
    var project, obj;
    project = e.target.name;
    return this.setState((
      obj = {},
      obj["" + project] = e.target.value,
      obj
    ));
  }

  // React will automatically provide us with the event `e`
  handleSubmit = (e) => {
    var that = this;
    e.preventDefault();
    return $.post('/projects', {
      project: this.state
    }, (function(_this) {
      return function(data) {
        that.resetForm(that);
        _this.props.handleNewRecord(data);
        return _this.setState(_this.state);
      };
    })(this), 'JSON');
  }

  handleImage = (e) => {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    var that = this;

    reader.onloadend = function() {
      that.setState({ avatar: reader.result, imageFile: file.name });
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ avatar: "", imageFile: null });
    }
  }

  resetForm(_this2) {
    $(".form_class").trigger('reset');
    this.setState({
      desc: '',
      avatar: '',
      imageFile: ''
    });
  }


  render() {
    return (
      <div className="container project_form">
        <h3>Create Project</h3>
        <div className="form-group">
          <form onSubmit={this.handleSubmit} className="form_class">
            <label>Title</label>
            <br></br>
            <input type="text" className="form-control" name="title" value={this.state.project} onChange={this.handleChange} ></input>
            <br></br>
            <label>Description</label>
            <br></br>
            <textarea className="form-control" name="desc" value={this.state.desc} onChange={this.handleChange} />
            <br></br>
            <label>Upload Image</label>
            <input className="form-control" type="file" name="project[picture]" id="image_uploader" onChange={this.handleImage} />
            <br></br>
            <input type="submit" name="commit" value="Create Project" className="btn btn-primary"/>
          </form>
          <br></br>
          <img className="preview-image" src={this.state.avatar} ></img>
        </div>
        <hr />
      </div>
    );
  }
}
