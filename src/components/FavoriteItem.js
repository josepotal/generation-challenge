import React from 'react';
import PropTypes from 'prop-types';

const FavoriteItem = props => (
  <div className="fav-item">
    <p>
      #{props.store.id} | {props.store.Name}
    </p>
  </div>
);

FavoriteItem.propTypes = {
  store: PropTypes.shape({
    id: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired,
  }).isRequired,
};

export default FavoriteItem;
