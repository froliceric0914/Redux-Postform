import React from 'react';
import logo from './logo.svg';
import './App.css';

import { provider } from 'react-redux';

// provider is the glue between react and redux
import store from './store';

import Post from './components/Post';
import PostForm from './components/PostForm';

// const store = createStore(() => [], {}, applyMiddleware());

function App() {
    return (
        <provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <PostForm />
                <hr />
                <Post />
            </div>
        </provider>
    );
}

export default App;
