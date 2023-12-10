import React from 'react';
import PropTypes from 'prop-types';
import avatarImg from '../assets/avatar-boy.png'
import '../styles/avatar.css'

function Avatar({page}) {
    
    const avatarClass = `avatar ${page}`;
    const spanClass = `overlay-${page}`;

  return (
    <>
        <span className={spanClass}></span>
        <img src={avatarImg} className={avatarClass} alt="avatar" /> 
    </>
  )
}

Avatar.propTypes = {
    page : PropTypes.string.isRequired, 
}

export default Avatar
