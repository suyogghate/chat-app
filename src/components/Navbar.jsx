import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Chit Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/14783460/pexels-photo-14783460.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="person" />
        <span>Suyog</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar