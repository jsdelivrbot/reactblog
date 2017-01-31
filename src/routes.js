import React from 'react'
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/posts_new';

const Greeting = () => {
    return <div> Hey there !</div>;
}

export default (
    <Route path="/" component={App}>
        <IndexRoute components={PostsIndex}/>
        <Route path="posts/new" components={PostNew}/>
    </Route>
);