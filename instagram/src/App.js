import React from 'react';
import Auth from './Components/Auth/Auth';
import PostsPage from './Components/PostContainer/PostsPage';
import './App.css';
const App = () => <PostsPage />;

export default Auth(App);

