import React from 'react';
import ImageAndSocials from '~/components/image-and-socials';

export default function Main(props) {
  return (
    <div className="content">
      <div className="main-info">
        <ImageAndSocials />
      </div>
      <div className="main-content">
        <p> Welcome! </p>
      </div>
    </div>
  );
}

Main.propTypes = {};
