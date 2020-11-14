import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ auth, User }) => {
  const { isAuthenticated, login, logout } = auth
  
  return (
    <header className=' align-items-center'>
      <nav className='navbar navbar-expand-lg navbar-light bg-secondary p-2 px-md-5'>
        <Link to='/' className='navbar-brand color'>
          FindIt
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ml-auto'>
            <Link to='/' className='nav-item nav-link li-color h3'>
              Home <span className='sr-only'></span>
            </Link>
            {isAuthenticated() && (
              <Link to='/house-list' className='nav-item nav-link li-color h3'>
                Houses
              </Link>
            )}
            {isAuthenticated() && (
              <Link
                to='/favourite-list'
                className='nav-item nav-link li-color h3'
              >
                Favourites
              </Link>
            )}
            <button
              type='button'
              className='nav-item nav-link text-white btn-success h3'
              onClick={isAuthenticated() ? logout : login}
            >
              {isAuthenticated() ? 'Log Out' : 'Log In'}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
Navbar.propTypes = {
  auth: PropTypes.func.isRequired,
  
}
const mapStateToProps = ({ User }) => ({ User })
export default connect(mapStateToProps)(Navbar)
