import React from "react";
import { connect } from "react-redux";
import { fetchBlog } from "../../actions";

class BlogShow extends React.Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  render() {
    if (!this.props.blog) {
      return <div>Loading...!!!</div>;
    }
    const { title, description } = this.props.blog;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { blog: state.blogs[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
