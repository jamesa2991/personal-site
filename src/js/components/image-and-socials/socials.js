import React from 'react';
import Facebook from 'img/icons/facebook.svg';
import Twitter from 'img/icons/twitter.svg';
import Github from 'img/icons/github.svg';
import LinkedIn from 'img/icons/linkedin.svg';
import Gmail from 'img/icons/gmail.svg';
import SocialIcon from '~/components/image-and-socials/social-icon';

const socials = () => {
  return (
    <div className="social-icons">
      <SocialIcon Icon={Facebook} title="View my Facebook Profile" link="https://www.facebook.com/jamesa2991" />
      <SocialIcon Icon={Twitter} title="View my Twitter feed" link="https://www.twitter.com/jamesa2991" />
      <SocialIcon Icon={LinkedIn} title="View my LinkedIn Profile" link="https://www.linkedin.com/in/jamesa2991/" />
      <SocialIcon Icon={Gmail} title="Contact me via Gmail" link="mailto:jamesa2991@gmail.com" />
      <SocialIcon Icon={Github} title="View my Github Profile" link="https://www.github.com/jamesa2991" />
    </div>
  );
};

export default socials;
