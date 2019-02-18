import React, { Component } from 'react';
import './login.css';
import { Button } from 'reactstrap'
import styled from 'styled-components'

const Form = styled.form`
  background: lightgrey;
  border-radius: 3px;
  width: 60%;
  margin: 20px auto;
  padding: 10px;
  text-align: center;
`

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
`

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }


    render() {
        return (
      <Form>
          <h2>Insta-Clone Log In</h2>
          <Input type="text" placeholder="Username" name="username" onChange={this.handleChange} />
          <Input type="password" placeholder="Password" name="password"  onChange={this.handleChange}/>
          <Button color="info" size="lg" block outline onClick={this.handleSubmit}>Submit</Button>
        </Form>
        )
    }
  };

export default LoginPage;