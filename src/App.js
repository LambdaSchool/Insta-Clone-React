import React from 'react'
import styled from 'styled-components'
import dummyData from './dummy-data'
import Search from './components/SearchBar/Search'
import PostsPage from './components/PostContainer/PostsPage'
import Authenticate from './components/Authentication/Authentication'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({ data: dummyData })
  }

  search = (term) => {
    let data = dummyData.filter(post => post.username.includes(term))
    this.setState({ data })
  }

  render() {
    const App = () => {
      return (
        <Div>
          <Search
            className="Search"
            search={this.search}
          />
          <PostsPage {...this.state} />
        </Div>
      )
    }

    const HOCApp = Authenticate(App)

    return (
      <HOCApp />
    )
  }
}

const Div = styled.div`
  text-align: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  font-size: 1.6rem;
`

export default App
