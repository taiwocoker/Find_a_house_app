import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadHouses } from '../actions/housesAction';
import { Link } from 'react-router-dom'

const HouseList = ({ auth, Houses, loadHouses }) => {
  const loadApplicationHouses = () => {
    const token = auth.getAccessToken();
    loadHouses(token);
  };
  React.useEffect(() => {
    if (Houses && Houses.length < 1) {
      loadApplicationHouses();
    }
  }, []);
  if (!Houses) {
    return (
      <h2 className="section-title">Try Again</h2>
    );
  }
  return (
    <>
      <section className='section'>
        {Houses.map((house) => (
          <div className='meals-center' key={house.id}>
            <img
              src={`${process.env.REACT_APP_SERVER_BLOB_PATH}${house.img_url}`}
              alt='house'
            />
            <p>{house.name}</p>
            <p>{house.description}</p>
            <Link to={`/house/${house.id}`} className='btn btn-primary btn-details'>
              Details
            </Link>
          </div>
        ))}
      </section>
    </>
  )
};
HouseList.defaultProps = {
  auth: null,
  Houses: null,
};
HouseList.propTypes = {
  auth: PropTypes.object || null,
  Houses: PropTypes.arrayOf(PropTypes.object) || null,
  loadHouses: PropTypes.func.isRequired,
};
const mapStateToProps = ({ Houses }) => ({ Houses });
const mapDispatchToProps = dispatch => ({
  loadHouses: token => dispatch(loadHouses(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HouseList);


