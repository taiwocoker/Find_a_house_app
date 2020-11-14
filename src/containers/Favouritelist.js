import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { loadFavourites } from '../actions/favouriteAction'
const FavouriteList = ({ User, Favourites, auth, loadFavourites }) => {
  const loadUserFavourites = () => {
    const token = auth.getAccessToken()
    loadFavourites(User.id, token)
  }
  React.useEffect(() => {
    loadUserFavourites()
  }, [])
  if (!Favourites)
    return <h2 className='section-title'>No Favourites to display</h2>
  return (
    <>
      <section className='section'>
        {Favourites.map((house) => (
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
}
FavouriteList.defaultProps = {
  auth: null,
  User: null,
  Favourites: null,
}
FavouriteList.propTypes = {
  User: PropTypes.object || null,
  auth: PropTypes.object || null,
  Favourites: PropTypes.arrayOf(PropTypes.object) || null,
  loadFavourites: PropTypes.func.isRequired,
}
const mapStateToProps = ({ Favourites, User }) => ({ Favourites, User })
const mapDispatchToProps = { loadFavourites }
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList)
