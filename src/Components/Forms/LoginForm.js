import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUserId, updateUserName } from '../../Redux/reducer'
import axios from 'axios'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      LoginUserName: '',
      LoginPassword: '',
      LoginError: false,
      LoginErrorMessage: 'Username or password is incorrect. Please try again'
    }

  }


  //this is called a public class field syntax. It auto binds (this)
  handleFormInputUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      loginError: false
    })
  }

  handleLoginFormSubmit = async (e) => {
    e.preventDefault()
    const { LoginUserName, LoginPassword } = this.state
    try {
      const res = await axios.post('/auth/login', { LoginUserName, LoginPassword })
      this.props.updateUserName(LoginUserName)
      this.props.updateUserId(res.data.user_id)
      this.props.history.push('/info')
    } catch (err) {
      this.setState({
        LoginUserName: '',
        LoginPassword: '',
        LoginError: true
      })
    }

  }


render(){
  return (
    //this makes it so we dont have to have a div . just a fragment 
    <>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          name='loginUsername'
          placeholder='username'
          value={this.state.LoginUserName}
          onChange={this.handleFormInputUpdate}
        />
        <input
          type='text'
          name='loginPassword'
          placeholder='password'
          value={this.state.LoginPassword}
          onChange={this.handleFormInputUpdate} />
        <button>Login</button>
      </form>
      {this.state.loginError && <h3>{this.state.LoginErrorMessage}</h3>}
    </>
  )
}
}
const mapDispatchToProps = {
  updateUserId,
  updateUserName

}

export default connect({}, mapDispatchToProps)(withRouter(LoginForm))