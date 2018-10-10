import React from 'react'
import styled from 'styled-components'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = () => {
    let user = localStorage.getItem('user')
    if (!user) localStorage.setItem('user', this.state.username)
    window.location.reload()
  }

  render() {
    return (
      <Form onSubmit={this.login}>
        <I className="fab fa-instagram"></I>
        <H1>Instagram</H1>
        <Input 
          name="username"
          type="text"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleSubmit}
          />
        <Input2
          name="password"
          type="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleSubmit}
          />
        <Button className="cookieFont" type="submit">Login</Button>
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  * {
    margin-top: 2%;
  }
`
const I = styled.form`
  color: white;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  font-size: 3rem;
  margin-bottom: 2%;
  width: 100%;
`
const H1 = styled.h1`
  margin: 0;
  font-family: 'Cookie', cursive;
`
const Input = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5%;
  border-radius: 5px;
`
const Input2 = styled.input`
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5%;
  border-radius: 5px;
`
const Button = styled.button`
  font-size: 2rem;
  font-family: 'Cookie', cursive;
`

export default Login