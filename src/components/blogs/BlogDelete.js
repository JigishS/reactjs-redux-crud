import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Modal";
import { fetchBlog, deleteBlog } from "../../actions";

class BlogDelete extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button
          className="ui button negative"
          onClick={() => this.props.deleteBlog(id)}
        >
          Delete
        </button>
        <Link className="ui button" to={"/"}>
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.blog) {
      return "Are you sure want to delete this blog?";
    }

    return `Are you sure want to delete this blog with title ${this.props.blog.title}`;
  }

  render() {
    return (
      <Modal
        title="Delete Blog"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownState) => {
  return { blog: state.blogs[ownState.match.params.id] };
};

export default connect(mapStateToProps, { fetchBlog, deleteBlog })(BlogDelete);
