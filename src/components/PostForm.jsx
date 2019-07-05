import React, { Component } from 'react';

//the below three imports are all for the usage of Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';
//inplement redux
// thunk
// dispatch
//provider
//

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value }); // what is the e.target
    };

    onSubmit = e => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        //call action
        this.props.createPost(post);
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea
                            name="body"
                            value={this.state.body}
                            onChange={this.onChange}
                        />
                        <br />
                        <button type="submit">Subtmit</button>
                    </div>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = { createPost: PropTypes.func.isRequired };

export default connect(
    null,
    { createPost }
)(PostForm);
