import { FETCH_POSTS, NEW_POST } from './types';
//async func

//dispatch is like a resolve of a promise
//ES6:

// epxort defualt function fetchPost()={
// return function(dispatch)
// }
export const fetchPosts = () => dispatch => {
    console.log('fetching: ');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_POSTS,
                payload: data
            });
        });
};
