import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({username}) => (
  <nav>
    <span>the bank</span>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
    {username && <div>Welcome, {username}</div>}
  </nav>



)


//alittle confusing. have to look this up 
const mapStateToProps = (reduxState) => {
  const { username } = reduxState
  return { username } 
}

export default connect(mapStateToProps)(Navbar)