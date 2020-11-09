import React from 'react'
import PropTypes from 'prop-types'
const LandingPage = ({ auth }) => {
  const { login } = auth
  return (
    <>
      <h1>Home</h1>
      <button type='button' onClick={login}>
        Log In
      </button>
    </>
  )
}

LandingPage.propTypes = {
  auth: PropTypes.func.isRequired,
}
export default HomePage
