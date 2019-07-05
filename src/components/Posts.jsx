import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction.js';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    //add the newPost to the whole Posts
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        );
    }
}

//propTypes is used for???
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
};

//??? where is the state coming from??
const mapStateToProps = state =>
    // console.log('state', state);
    ({
        posts: state.posts.items, // in reducer, we set a "posts"
        newPost: state.posts.item
    });

export default connect(
    mapStateToProps,
    { fetchPosts }
)(Posts);
