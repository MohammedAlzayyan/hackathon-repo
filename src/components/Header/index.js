import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
function Header({ searchHandler }) {
  const [searchWord, setSearchWord] = useState('')
  const token = localStorage.getItem('token')
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
            {token ? (
              <span className="username">{localStorage.getItem('name')}</span>
            ) : (
              <Link to="/sign-in">Login</Link>
            )}
            <img src="/user-icon.png" alt="ffff" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
