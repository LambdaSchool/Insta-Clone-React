import React from 'react'
import Login from '../Login/Login';

const Authenticate = (PassedComponent) => {
    return class extends React.Component{
        constructor(){
            super()
            this.state = {
                loggedIn: false,
            }
        }
        componentDidMount(){
            if(!localStorage.getItem('Username')){
                this.setState({
                    loggedIn:false,
                })
            }else{
                this.setState({
                    loggedIn:true,
                })
            }
        }
        render(){
            if(this.state.loggedIn){
                return <PassedComponent />
            }else{
                return <Login />;
            }     
        }
    }
}

export default Authenticate;