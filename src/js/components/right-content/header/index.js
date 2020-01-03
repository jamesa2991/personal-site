import React from 'react';
import HeaderItem from '~/containers/right-content/header/header-item';
import { LOCATIONS } from '~/constants/location';

const HeaderBar = () => {
  return (
    <div className="header-bar">
      {LOCATIONS.map((location) => (
        <HeaderItem key={location} location={location} />
      ))}
    </div>
  );
};

export default HeaderBar;
