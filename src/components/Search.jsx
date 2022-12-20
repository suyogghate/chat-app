import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user...'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/14783460/pexels-photo-14783460.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="userChat" />
        <div className="userChatInfo">
          <span>Ankit</span>
        </div>
      </div>
    </div>
  )
}

export default Search