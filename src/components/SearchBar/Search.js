import React from 'react'
import styled from 'styled-components'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ""
    }
  }

  updateTerm = (e) => {
    this.setState({ term: e.target.value })
  }

  search = (e) => {
    e.preventDefault()
    this.props.search(this.state.term)
  }

  render() {
    return (
      <Header>
        <LogoHeader>
          <LogoImage className="fab fa-instagram navLogo1"></LogoImage>
          <Span>Instagram</Span>
        </LogoHeader>
  
  
        <Form onSubmit={this.search}>
          <Input
            placeholder={this.state.searchStr || "🔍 Search"}
            onChange={this.updateTerm}
          />
        </Form>
  
        <Div3>
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </Div3>
      </Header>
    )
  }
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.6rem;
  margin: 2% 0;
`

const LogoHeader = styled.div`
  display: flex;
  align-items: center;
`

const Div3 = styled.div`
  display: flex;
  font-size: 2.4rem;
  display: flex;
  justify-content: space-between;
  width: 130px;
  margin-right: 5%;
`

const Span = styled.span`
  font-family: 'Cookie', cursive;
`

const Form = styled.form`
  display: flex;
`

const Input = styled.input`
  align-self: flex-start;
  font-size: 1.4rem;
  padding: 2% 16%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #FAFAFA; 
`

const LogoImage = styled.i`
  margin: 0 10%;
  padding: 0 12%;
  border-right: 1px solid black;
`

export default Search
