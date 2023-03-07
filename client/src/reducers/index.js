import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';

// when key equals value, 'posts:posts' , then it can be shorthanded as 'posts'
export const reducers = combineReducers({ posts, auth });
/*
combined the 'posts' and 'auth' function into a single reducer function 'reducers'.
The resulting 'reducers' function can be used to manage the state of our entire application.
*/

