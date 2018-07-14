import React from 'react'
import avatar from '../../public/static/images/avatar.png';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import SocialLink from './socialLink';

export default ({title}) => {

  return (
    <header id="header" className="profile">
      <img id="avatar" className="2x" src={avatar}/>
      <h1>{title}</h1>
      <h2>
        Front-End Developer at NHN ENT. working on&nbsp;
        <span className="highlight">
          TOAST FILE
        </span>
      </h2>
      <SocialLink />
    </header>
  );
};
