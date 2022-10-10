import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../actions/index";

class BlogList extends React.Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }

  renderAdmin(blog) {
    return (
      <div className="right floated content">
        <Link className="ui button primary" to={`/blogs/edit/${blog.id}`}>
          Edit
        </Link>
        <Link className="ui button negative" to={`/blogs/delete/${blog.id}`}>
          Delete
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.blogs.map((blog) => {
      return (
        <div className="item" key={blog.id}>
          {this.renderAdmin(blog)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
            <div className="description">{blog.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/blogs/new" className="ui button primary">
          Create Blog
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Blogs</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapsToProps = (state) => {
  return {
    blogs: Object.values(state.blogs),
  };
};

export default connect(mapsToProps, { fetchBlogs })(BlogList);
