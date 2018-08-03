import React from 'react';
import Login from '../Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {}
        }


        render() {
            return(
                <Login handleLogin={this.props.handleLogin} />
            )
            
        }
    }

export default Authenticate;