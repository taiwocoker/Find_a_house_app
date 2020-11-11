import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/userAction';

const LandingPage = ({ auth, loadUser, User }) => {
  const loadUserProfile = () => {
    let body;
    const token = auth.getAccessToken();
    auth.getProfile((profile, error) => {
      if (error) throw new Error(error);
      body = {
        username: profile.nickname,
        email: profile.email,
      };
    });
    setTimeout(() => loadUser(body, token), 2000);
  };
  React.useEffect(() => {
    if (auth.isAuthenticated() && (Object.keys(User).length === 0 && User.constructor === Object)) {
      loadUserProfile();
    }
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};
LandingPage.defaultProps = {
  auth: null,
  User: null,
};
LandingPage.propTypes = {
  auth: PropTypes.object || null,
  User: PropTypes.object || null,
  loadUser: PropTypes.func.isRequired,
};
const mapStateToProps = ({ User }) => ({ User });
const mapDispatchToProps = { loadUser };
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);