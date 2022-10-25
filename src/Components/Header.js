import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div>
        <div className='profile-container'>
        <img src="/assets/profile__img.png" alt="profile_img" id="profile_img" />
        <img src="/assets/camera-icon.svg" className='camera' alt="camera" />
        </div>
        <p id='twitter'>Rambeybello</p>
        <p id='slack'>Rambey</p>
      </div>
        <span className='share-tooltip'>
          <img src="/assets/share-icon.svg" alt="share" className='share'/>
          <img src="/assets/menu-icon.svg" alt="menu" className='menu'/>
          <p className='tiptext'>Share Link</p>
        </span>
      </div>
  )
}

export default Header