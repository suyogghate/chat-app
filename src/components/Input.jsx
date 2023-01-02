import React from 'react';
import Img from '../assets/image.png';
import Attach from '../assets/attach.png';

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something....' />
      <div className="send">
        <img src={Attach} style={{height: '20px', width: '20px'}} alt="" />
        <input type="file" style={{display: 'none'}} id='file'/>
        <label htmlFor="file">
          <img src={Img} style={{height: '20px', width: '20px'}} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input