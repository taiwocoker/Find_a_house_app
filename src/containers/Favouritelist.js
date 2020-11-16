import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadFavourites } from '../actions/favouriteAction';

const FavouriteList = ({
  User, Favourites, auth, loadFavourites,
}) => {
  const loadUserFavourites = () => {
    const token = auth.getAccessToken();
    loadFavourites(User.id, token);
  };
  React.useEffect(() => {
    loadUserFavourites();
  }, []);
  if (!Favourites) { return <h2 className="section-title">No Favourites to display</h2>; }
  return (
    <section className="section height bg-1">
      <div className="main">
        <h1 className="my-3">Your Favourites</h1>
        <div />
      </div>
      <div className="container">
        <div className="row div-cards">
          {Favourites.map(house => (
            <div className="card-group col-md-4 cards p-2" key={house.id}>
              <div className="card">
                <img className="card-img-top" src={house.img_url} alt="house" />
                <div className="card-body">
                  <h5 className="card-title">{house.name}</h5>
                  <p className="card-text">{house.description}</p>
                </div>
                <div className="card-footer">
                  <Link
                    to={`/house/${house.id}`}
                    className="btn li-color btn-details btn-success"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
FavouriteList.defaultProps = {
  auth: null,
  User: null,
  Favourites: null,
};
FavouriteList.propTypes = {
  User: PropTypes.object || null,
  auth: PropTypes.object || null,
  Favourites: PropTypes.arrayOf(PropTypes.object) || null,
  loadFavourites: PropTypes.func.isRequired,
};
const mapStateToProps = ({ Favourites, User }) => ({ Favourites, User });
const mapDispatchToProps = { loadFavourites };
export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);
