import React from 'react';
import jay from 'img/jay.jpg';

const PersonalInfo = () => {
  console.log(jay);
  return (
    <React.Fragment>
      <div className="personal-image">
        <img src={jay} />
      </div>
      <h1 className="name">Jay Allen</h1>
      <span className="title">Web Developer</span>
      <div className="socials">Social Content goes here</div>
    </React.Fragment>
  );
};

export default PersonalInfo;
