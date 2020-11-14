import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ auth, User }) => {
  const { isAuthenticated, login, logout } = auth
  
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {isAuthenticated() && (
          <li>
            <Link to='/house-list'>Houses</Link>
          </li>
        )}
        {isAuthenticated() && (
          <li>
            <Link to='/favourite-list'>Favourites</Link>
          </li>
        )}
        <li>
          <button type='button' onClick={isAuthenticated() ? logout : login}>
            {isAuthenticated() ? 'Log Out' : 'Log In'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
Navbar.propTypes = {
  auth: PropTypes.func.isRequired,
  
}
const mapStateToProps = ({ User }) => ({ User })
export default connect(mapStateToProps)(Navbar)
