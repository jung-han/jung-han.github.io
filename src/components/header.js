import React from 'react'
import avatar from '../images/avatar.jpeg'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import SocialLink from './socialLink'

export default ({ title }) => {
  return (
    <header id="header" className="profile">
      <img id="avatar" className="2x" src={avatar} />
      <h1>{title}</h1>
      <h2>
        Front-End Developer at NHN. working on&nbsp;
        <span className="highlight">TOAST UI</span>
      </h2>
      <SocialLink />
    </header>
  )
}
