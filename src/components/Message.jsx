import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/14783460/pexels-photo-14783460.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="chatimage" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/14783460/pexels-photo-14783460.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="chatimage" />
      </div>
    </div>
  )
}

export default Message;