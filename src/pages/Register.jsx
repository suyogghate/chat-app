import React from 'react';
import avatar from '../assets/addAvatar.png'

function Register() {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chit Chat</span>
        <span className='title'>Register</span>
        <form>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display: 'none'}} type="file" id='file'/>
          <label htmlFor="file">
            <img src={avatar} alt="add" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register