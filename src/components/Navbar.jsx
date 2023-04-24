import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">TalkNow</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className='username'>{currentUser.displayName}</span>
      </div>
    </div>
  )
}

export default Navbar