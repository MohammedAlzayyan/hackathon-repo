import React, { useState } from 'react'
import './index.css'
function Header({ searchHandler }) {
  const [searchWord, setSearchWord] = useState('')
  return (
    <>
      <header>
        <div className="container">
          <img className="logo" src="/logo.png" alt="logo" />
          <form>
            <div className="input">
              <input
                value={searchWord}
                onChange={(e) => {
                  setSearchWord(e.target.value)
                }}
                type="text"
                placeholder="search"
              />
              <button
                onClick={() => {
                  searchHandler(searchWord)
                }}
              >
                <img src="/search.png" alt="search" />
              </button>
            </div>
          </form>
          <div className="user">
            <span className="username">{localStorage.getItem('name')}</span>
            <img src="/user-icon.png" alt="ffff" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
