import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    const postId = this.props.match.params.id;
    this.props.fetchPost(postId);
  }

  onDeleteClick() {
    const postId = this.props.match.params.id;
    this.props.deletePost(postId, () => 
      this.props.history.push('/')
    );
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link style={{marginBottom: 10}} to="/">&lt; Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)