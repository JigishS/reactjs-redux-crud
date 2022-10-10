import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchBlog, editBlog } from "../../actions";
import BlogForm from "./BlogForm";

class BlogEdit extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editBlog(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.blog) {
      return <div>Loading...!!!</div>;
    }
    return (
      <div>
        <h3>Edit a Blog</h3>
        <BlogForm
          /*
            initialValues={{
              title: this.props.blog.title,
              description: this.props.blog.description,
            }}
          */
          initialValues={_.pick(this.props.blog, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return { blog: state.blogs[ownState.match.params.id] };
};

export default connect(mapStateToProps, { fetchBlog, editBlog })(BlogEdit);
