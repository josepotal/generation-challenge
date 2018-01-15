import React from 'react';
import PropTypes from 'prop-types';

import './FavoriteItem.module.scss';

const FavoriteItem = ({ store }) => (
  <div className="favItem">
    <p>
      #{store.id} | {store.Name}
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
