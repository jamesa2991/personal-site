import React from 'react';
import propTypes from 'prop-types';

const HeaderItem = (props) => {
  return (
    <div
      className={`header-item${props.currentLocation ? ' current-location' : ''}`}
      onClick={() => props.setCurrentLocation(props.location)}
    >
      <span className="header-item-button">{props.title}</span>
    </div>
  );
};

HeaderItem.propTypes = {
  setCurrentLocation: propTypes.func,
  title: propTypes.string,
  location: propTypes.string,
  currentLocation: propTypes.bool,
};

export default HeaderItem;
