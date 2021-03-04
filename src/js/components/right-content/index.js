import React from 'react';
import propTypes from 'prop-types';

const MainContent = (props) => {
  return <div className="right-content">{props.currentLocation}</div>;
};

MainContent.propTypes = {
  currentLocation: propTypes.string,
};
export default MainContent;
