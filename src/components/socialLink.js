import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {socialLinks} from "../personalInfo";

export default () => {
  const {facebook, instagram, linkedin, medium, github} = socialLinks;
  return (
    <div>
      <a href={facebook} className="fa fa-facebook"></a>
      <a href={instagram} className="fa fa-instagram"></a>
      <a href={medium} className="fa fa-medium"></a>
      <a href={github} className="fa fa-github"></a>
      <a href={linkedin} className="fa fa-linkedin"></a>
    </div>
  );
};

