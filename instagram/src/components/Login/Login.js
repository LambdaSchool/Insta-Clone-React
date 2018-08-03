import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    handleChange = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="loginForm" onSubmit={(e) => {this.props.handleLogin(this.state.username)}}>
                    <h1>Please log in</h1>
                    <input name="username" type="text" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                    <input name="password" type="password" placeholder="password" />
                    <button type="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default Login;