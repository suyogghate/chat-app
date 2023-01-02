import React from 'react';
import Cam from '../assets/cam.png';
import Add from '../assets/add.png';
import More from '../assets/more.png';
import Messages from './Messages';
import Input from './Input';

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className='chatIcons'>
          <img src={Cam} style={{height: '20px', width: '20px'}} alt="camera" />
          <img style={{height: '20px', width: '20px'}} src={Add} alt="add" />
          <img style={{height: '20px', width: '20px'}} src={More} alt="more" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat