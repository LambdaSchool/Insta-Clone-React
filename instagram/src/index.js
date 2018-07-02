import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Bootstrap/bootstrap.min.css'
import Authenticate from './Authentication/Authenticate';

const WrappedApp = Authenticate(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));
