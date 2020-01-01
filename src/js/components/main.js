import React from 'react';
import propTypes from 'prop-types';
import PersonalInfo from '~/components/personal-info';

export default function Main(props) {
  return (
    <div className="content">
      <div className="main-info">
        <PersonalInfo />
      </div>
      <div className="main-content">
        <p> Welcome! </p>
      </div>
    </div>
  );
}

Main.propTypes = {};
