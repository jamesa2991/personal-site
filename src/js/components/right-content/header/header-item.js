import React from 'react';
import propTypes from 'prop-types';

const HeaderItem = (props) => {
  return (
    <div className="header-item" onClick={() => props.setCurrentLocation(props.location)}>
      <h2>{props.title}</h2>
    </div>
  );
};

HeaderItem.propTypes = {
  setCurrentLocation: propTypes.func,
  title: propTypes.string,
  location: propTypes.string,
};

export default HeaderItem;
