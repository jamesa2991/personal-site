import React from 'react';
import propTypes from 'prop-types';

export const SocialIcon = ({ Icon, link, title }) => {
  return (
    <div className="social-icon">
      <a href={link} target="_blank">
        <Icon title={title} />
      </a>
    </div>
  );
};

SocialIcon.propTypes = {
  Icon: propTypes.func,
  link: propTypes.string,
  title: propTypes.string,
};

export default SocialIcon;
