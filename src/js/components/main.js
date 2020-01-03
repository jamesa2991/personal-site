import React from 'react';
import ImageAndSocials from '~/components/image-and-socials';
import HeaderBar from '~/components/right-content/header';
import RightContent from '~/containers/right-content';

export default function Main(props) {
  return (
    <div className="content">
      <div className="left">
        <ImageAndSocials />
      </div>
      <div className="right">
        <div className="right-content-wrapper">
          <HeaderBar />
          <RightContent />
        </div>
      </div>
    </div>
  );
}

Main.propTypes = {};
