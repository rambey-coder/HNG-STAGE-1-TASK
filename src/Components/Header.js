import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <span>
        <img src="/assets/profile__img.png" alt="profile_img" id="profile_img" />
        <p id='twitter'>Rambeybello</p>
      </span>
        <span>
          <img src="/assets/share-icon.svg" alt="share" className='share'/>
          <img src="/assets/menu-icon.svg" alt="menu" className='menu'/>
        </span>
      </div>
  )
}

export default Header