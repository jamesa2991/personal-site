import React from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS } from '~/constants/location';
import HeaderItem from '~/containers/header/header-item';
import { LOCATION_INFO } from '../../constants/location';

const Header = () => {
  return (
    <div className="header">
      <h1 className="name">Playground</h1>
      <div className="header-bar">
        {LOCATIONS.map((location) => (
          <Link to={`${LOCATION_INFO[location].route}`} key={location}>
            <HeaderItem location={location} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
