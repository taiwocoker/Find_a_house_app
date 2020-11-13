import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { loadHouse, loadHouseSuccess } from '../actions/houseAction'
import {createFavourite} from '../api/userApi'
const HousePage = ({ House, loadHouse, loadHouseSuccess, auth, User }) => {
  const { id } = useParams()
  const loadHousePageDetails = () => {
    const token = auth.getAccessToken()
    loadHouse(id, token)
  }
  React.useEffect(() => {
    loadHouseSuccess({})
    loadHousePageDetails()
  }, [id])
  if (!House) return <h2 className='section-title'>No house to display</h2>
  const { name, description } = House
  return (
    <section className='section meal-section'>
      <Link to='/' className='btn btn-primary'>
        Back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <img
        src={`${process.env.REACT_APP_SERVER_BLOB_PATH}${House.img_url}`}
        alt='house'
      />
      <p>{description}</p>
      <button
        type='button'
        onClick={() =>
          createFavourite(User.id, House.id, auth.getAccessToken())
        }
      >
        Add to Favourites
      </button>
    </section>
  )
}
HousePage.defaultProps = {
  House: null,
  auth: null,
  User: null,
}
HousePage.propTypes = {
  House: PropTypes.object || null,
  auth: PropTypes.object || null,
  User: PropTypes.object || null,
  loadHouse: PropTypes.func.isRequired,
  loadHouseSuccess: PropTypes.func.isRequired,
}
const mapStateToProps = ({ House, User }) => ({ House, User })
const mapDispatchToProps = { loadHouse, loadHouseSuccess }
export default connect(mapStateToProps, mapDispatchToProps)(HousePage)
