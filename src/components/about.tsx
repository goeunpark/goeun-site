import React, { FunctionComponent } from 'react';
import BioImg from '../images/goeun.jpg';
import Img from 'gatsby-image';

const About = (): JSX.Element => {
  return (
    <div className="about-me">
      <p><img src={BioImg} className="profile-pic" /></p>
      <p>hi. my name is goeun.</p>
    </div>
  );
};

export default About;
