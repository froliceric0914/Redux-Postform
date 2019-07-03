import React, { Component } from 'react';

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => console.log('post data: ', data));
    };
    //add state
    //add onChange
    //add onSubmit
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

export default PostForm;
