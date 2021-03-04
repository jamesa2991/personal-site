import React from 'react';
import jay from 'img/jay.jpg';
import Socials from '~/components/image-and-socials/socials';

const ImageAndSocials = () => {
  return (
    <React.Fragment>
      <div className="personal-image">
        <img src={jay} title="Me and my Wife!" />
      </div>
      <h1 className="name">Jay Allen</h1>
      <h2 className="title">Web Developer</h2>
      <Socials />
    </React.Fragment>
  );
};

export default ImageAndSocials;
