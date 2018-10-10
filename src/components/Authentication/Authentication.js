import React from 'react'
import Login from '../Login/Login'

const Authenticate = (App) => class extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    let user = localStorage.getItem('user')

    if (!user) this.setState({ loggedIn: false })
    else if (user) this.setState({ loggedIn: true })
  }

  render() {
    const {loggedIn} = this.state

    return(
      loggedIn ? <App /> : <Login />
    )
  }
}

export default Authenticate

// I tried to return a class from a class and it did not work, keeping as example
// import App from '../../App'
// class Authenticate extends React.Component {
//   constructor(App) {
//     super(App)
//     this.state = {
//       loggedIn: false
//     }
//   }

//   render(App) {
//     return (
//       class extends React.Component {
//         render() {
//           return <App />
//         }
//       }
//     )
//   }
// }