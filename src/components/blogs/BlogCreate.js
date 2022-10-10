import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../../actions";
import BlogForm from "./BlogForm";

class BlogCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createBlog(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Blog</h3>
        <BlogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createBlog })(BlogCreate);
